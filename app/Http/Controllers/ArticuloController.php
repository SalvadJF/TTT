<?php

namespace App\Http\Controllers;

use App\Models\Articulo;
use App\Http\Controllers\Controller;
use App\Models\Categoria;
use App\Models\Etiqueta;
use Illuminate\Http\Request;

class ArticuloController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $articulos = Articulo::orderBy('created_at', 'desc')->paginate(8);
        return view('articulos.index', ['articulos' => $articulos]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categorias = Categoria::all();
        $etiquetas = Etiqueta::all();
        return view('articulos.create', ['categorias' => $categorias, 'etiquetas' => $etiquetas]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'nombre' => 'required|max:255',
            'descripcion' => 'required|max:65535',
            'tipo' => 'required|in:Modelo_3d,Textura',
            'imagen' => 'image|mimes:' . Articulo::MIME_IMAGEN,
            'modelo' => 'file',
            'categorias' => 'required|array|max:3',
            'categorias.*' => 'exists:categorias,id',
            'etiquetas' => 'required|array|max:3',
            'etiquetas.*' => 'exists:etiquetas,id',
        ]);

        $imagenNombre = 'Articulo_' . uniqid() . '_' . now()->format('d-m-Y') . '.' . $request->imagen->extension();
        $request->imagen->move(public_path('img/articulos'), $imagenNombre);

        $modeloNombre = 'Articulo_' . uniqid() . '_' . now()->format('d-m-Y') . '.stl';
        $request->modelo->move(public_path('img/modelos'), $modeloNombre);

        $articulo = Articulo::create([
            'nombre' => $request->nombre,
            'descripcion' => $request->descripcion,
            'tipo' => $request->tipo,
            'modelo' => $modeloNombre,
            'imagen' => $imagenNombre,
            'user_id' => auth()->id(),
        ]);

        $articulo->categorias()->attach($request->categorias);
        $articulo->etiquetas()->attach($request->etiquetas);

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
        $categorias = Categoria::all();
        $etiquetas = Etiqueta::all();

        return view('articulos.edit', ['articulo' => $articulo, 'categorias' => $categorias, 'etiquetas' => $etiquetas]);
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
            'nombre' => 'required|max:255',
            'descripcion' => 'required|max:65535',
            'tipo' => 'required|in:Modelo_3d,Textura',
            'imagen' => 'image|mimes:' . Articulo::MIME_IMAGEN,
            'modelo' => 'file',
            'categorias' => 'required|array|max:3',
            'categorias.*' => 'exists:categorias,id',
            'etiquetas' => 'required|array|max:3',
            'etiquetas.*' => 'exists:etiquetas,id',
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

        // Sincronizar las relaciones de categorías y etiquetas
        $articulo->categorias()->sync($request->categorias);
        $articulo->etiquetas()->sync($request->etiquetas);

        return view('articulos.show', ['articulo' => $articulo]);
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
