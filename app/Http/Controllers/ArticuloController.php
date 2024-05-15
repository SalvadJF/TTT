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
            'modelo' => 'file',
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
        'modelo' => 'file',
    ]);

    // Actualizar imagen solo si se proporciona un nuevo archivo de imagen
    if ($request->hasFile('imagen')) {
        // Eliminar la imagen anterior si existe
        if ($articulo->imagen !== 'default.jpg') {
            unlink(public_path('img/articulos/' . $articulo->imagen));
        }

        $imagenNombre = 'Articulo_' . uniqid() . '_' . now()->format('d-m-Y') . '.' . $request->imagen->extension();

        $request->imagen->move(public_path('img/articulos'), $imagenNombre);

        $articulo->update([
            'imagen' => $imagenNombre,
        ]);
    }
    // AHora mismo solo se puede actualizar a la vez uno de los archivos o imagen o modelo, debo investigar porque
    // Actualizar modelo solo si se proporciona un nuevo archivo de modelo
    if ($request->hasFile('modelo')) {
        // Eliminar el modelo anterior si existe
        if ($articulo->modelo !== 'default.stl') {
            unlink(public_path('img/modelos/' . $articulo->modelo));
        }

        $modeloNombre = 'Articulo_' . uniqid() . '_' . now()->format('d-m-Y') . '.stl';

        $request->modelo->move(public_path('img/modelos'), $modeloNombre);

        $articulo->update([
            'modelo' => $modeloNombre,
        ]);
    }

    // Actualizar otros campos
    $articulo->update([
        'nombre' => $request->nombre,
        'descripcion' => $request->descripcion,
        'tipo' => $request->tipo,
    ]);

    return redirect()->back()->with('success', 'La noticia se ha actualizado correctamente.');
}



    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Articulo $articulo)
    {
        // Verificar si el usuario autenticado es el creador de la noticia o es administrador
        if (auth()->id() !== $articulo->user_id && !auth()->user()->isAdmin()) {
            abort(403); // No autorizado
        }

        $articulo->delete();

        session()->flash('success', 'El artículo se ha eliminado correctamente.');
        return back();
    }
}
