<?php

namespace App\Http\Controllers;

use App\Models\Articulo;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ArticuloController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $articulos = Articulo::paginate(8);
        return view('articulos.index', ['articulos' => $articulos]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('articulos.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'nombre' => 'required',
            'descripcion' => 'required',
            'tipo' => 'required',
            'imagen' => 'image|mimes:' . Articulo::MIME_IMAGEN,
            'modelo' => 'image|mimes:' . Articulo::MIME_MODELO,
        ]);

        $imagenNombre = 'Articulo_' . uniqid() . '_' . now()->format('d-m-Y') . '.' . $request->imagen->extension();
        $modeloNombre = 'Articulo_' . uniqid() . '_' . now()->format('d-m-Y') . '.' . $request->modelo->extension();

        $request->imagen->move(public_path('img/articulos'), $imagenNombre);
        $request->modelo->move(public_path('img/modelos'), $modeloNombre);

        $articulo = Articulo::create([
            'nombre' => $request->nombre,
            'descripcion' => $request->descripcion,
            'tipo' => $request->tipo,
            'imagen' => $imagenNombre,
            'modelo' => $modeloNombre,
            'user_id' => auth()->id(),
        ]);

        return redirect()->route('articulos.show', $articulo);
    }

    /**
     * Display the specified resource.
     */
    public function show(Articulo $articulo)
    {
        return view('articulos.show', ['articulo' => $articulo]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Articulo $articulo)
    {
        // Verificar si el usuario autenticado es el creador de la noticia o es administrador
        if (auth()->id() !== $articulo->user_id && !auth()->user()->isAdmin()) {
            abort(403); // No autorizado
        }

        return view('articulos.edit', ['articulo' => $articulo]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Articulo $articulo)
    {
        // Verificar si el usuario autenticado es el creador de la noticia o es administrador
        if (auth()->id() !== $articulo->user_id && !auth()->user()->isAdmin()) {
            abort(403); // No autorizado
        }

        $request->validate([
            'nombre' => 'required',
            'descripcion' => 'required',
            'tipo' => 'required',
            'imagen' => 'image|mimes:' . Articulo::MIME_IMAGEN,
            'modelo' => 'image|mimes:' . Articulo::MIME_MODELO,
        ]);

        // Eliminar la imagen anterior si se proporciona una nueva
        if ($request->hasFile('imagen')) {
            if ($articulo->imagen !== 'default.jpg') {
                unlink(public_path('img/noticias/' . $articulo->imagen));
            }

        $imagenNombre = 'Articulo_' . uniqid() . '_' . now()->format('d-m-Y') . '.' . $request->imagen->extension();
        $modeloNombre = 'Articulo_' . uniqid() . '_' . now()->format('d-m-Y') . '.' . $request->modelo->extension();

        $request->imagen->move(public_path('img/articulos'), $imagenNombre);
        $request->modelo->move(public_path('img/modelos'), $modeloNombre);

        $articulo->update([
            'imagen' => $imagenNombre,
            'modelo' => $modeloNombre,
        ]);
        }

        $articulo->update([
            'nombre' => $request->nombre,
            'descripcion' => $request->descripcion,
            'tipo' => $request->tipo,
        ]);
        return redirect()->route('articulos.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Articulo $articulo)
    {
        $articulo->delete();

        session()->flash('success', 'El artículo se ha eliminado correctamente.');
        return redirect()->route('articulos.index');
    }
}
