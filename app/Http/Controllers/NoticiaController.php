<?php

namespace App\Http\Controllers;

use App\Models\Noticia;
use App\Models\Categoria;
use App\Models\Etiqueta;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class NoticiaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $noticias = Noticia::orderBy('created_at', 'desc')->paginate(-2);
        return Inertia::render('Noticias/Index', [
            'noticias' => $noticias
        ]);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categorias = Categoria::all();
        $etiquetas = Etiqueta::all();
        return Inertia::render('Noticias/Create', [
            'categorias' => $categorias,
            'etiquetas' => $etiquetas
        ]);

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'titulo' => 'required|max:255',
            'resumen' => 'required|max:1255',
            'contenido' => 'required|max:65535',
            'tipo' => 'required|in:Noticia,Entrevista,Informacion',
            'imagen' => 'image|mimes:' . Noticia::MIME_IMAGEN,
            'etiquetas' => 'required|array|max:3',
            'etiquetas.*' => 'exists:etiquetas,id',
        ]);

        $imagenNombre = 'Noticia_' . uniqid() . '_' . now()->format('d-m-Y') . '.' . $request->imagen->extension();

        $request->imagen->move(public_path('img/noticias'), $imagenNombre);
        $imagenPath = ('/img/noticias/' . $imagenNombre);

        $noticia = Noticia::create([
            'titulo' => $request->titulo,
            'resumen' => $request->resumen,
            'contenido' => $request->contenido,
            'tipo' => $request->tipo,
            'imagen' => $imagenPath,
            'user_id' => auth()->id(),
        ]);

        $noticia->etiquetas()->attach($request->etiquetas);

        return redirect()->route('noticias.show', $noticia);
    }

    /**
     * Display the specified resource.
     */
    public function show(Noticia $noticia)
    {
        // Obtener las etiquetas asociadas al artículo
        $etiquetas = $noticia->etiquetas()->get();

        return Inertia::render('Noticias/Show', [
            'noticia' => $noticia,
            'etiquetas' => $etiquetas,
        ]);

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Noticia $noticia)
    {
        // Verificar si el usuario autenticado es el creador de la noticia o es administrador
        if (auth()->id() !== $noticia->user_id && !auth()->user()->isAdmin()) {
            abort(403); // No autorizado
        }

        $etiquetas = Etiqueta::all();
        $etiquetasNoticia = $noticia->etiquetas;

       return Inertia::render('Noticias/Edit', ['noticia' => $noticia, 'etiquetas' => $etiquetas , 'etiquetasNoticia' => $etiquetasNoticia]);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Noticia $noticia)
    {

        // Verificar si el usuario autenticado es el creador de la noticia o es administrador
        if (auth()->id() !== $noticia->user_id && !auth()->user()->isAdmin()) {
            abort(403); // No autorizado
        }

        $request->validate([
            'titulo' => 'required',
            'resumen' => 'required',
            'contenido' => 'required',
            'tipo' => 'required|in:Noticia,Entrevista,Informacion',
            'imagen' => 'image|mimes:' . Noticia::MIME_IMAGEN,
            'etiquetas' => 'required|array|max:3',
            'etiquetas.*' => 'exists:etiquetas,id',
        ]);

        // Eliminar la imagen anterior si se proporciona una nueva
        if ($request->hasFile('imagen')) {
            if ($noticia->imagen !== 'default.jpg') {
                unlink(public_path('img/noticias/' . $noticia->imagen));
            }

            $imagenNombre = 'Noticia_' . $noticia->id . '_' . now()->format('d-m-Y') . '.' . $request->imagen->extension();

            $request->imagen->move(public_path('img/noticias'), $imagenNombre);

            $noticia->update([
                'imagen' => $imagenNombre,
            ]);
        }

        $noticia->update([
            'titulo' => $request->titulo,
            'resumen' => $request->resumen,
            'contenido' => $request->contenido,
            'tipo' => $request->tipo,
        ]);

        // Sincronizar las relaciones de categorías y etiquetas
        $noticia->etiquetas()->sync($request->etiquetas);

        return redirect()->route('noticias.show', $noticia);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Noticia $noticia)
    {
        $noticia->delete();

        return ;
    }
}

