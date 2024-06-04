<?php

 namespace App\Http\Controllers;

 use App\Models\Articulo;
 use App\Http\Controllers\Controller;
 use App\Models\Categoria;
use App\Models\Contador;
use App\Models\Etiqueta;
use App\Models\Factura;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;


 class ArticuloController extends Controller
 {
     /**
      * Display a listing of the resource.
      */
      public function index(Request $request)
      {
          $searchTerm = $request->input('search');
          $filterType = $request->input('type');

          $query = Articulo::with('user')->orderBy('created_at', 'desc');

          if ($searchTerm) {
              $query->where(function($q) use ($searchTerm) {
                  $q->where('nombre', 'like', '%' . $searchTerm . '%');
              });
          }

          if ($filterType) {
              if ($filterType === 'Modelo_3D') {
                  $query->where('tipo', 'Modelo_3D');
              } elseif ($filterType === 'Textura') {
                  $query->where('tipo', 'Textura');
              }
          }

          $articulos = Articulo::with(['user', 'contadores' => function ($query) {
            $query->where('nombre', 'Likes');
        }])->orderBy('created_at', 'desc')->paginate(-2);

          return Inertia::render('Articulos/Index', ['articulos' => $articulos, 'search' => $searchTerm, 'type' => $filterType]);
      }

     /**
      * Show the form for creating a new resource.
      */
    public function create()

     {
         $categorias = Categoria::all();
         $etiquetas = Etiqueta::all();
        return Inertia::render('Articulos/Create', ['categorias' => $categorias, 'etiquetas' => $etiquetas]);
     }

     /**
      * Store a newly created resource in storage.
      */
      public function store(Request $request)
        {
            $validatedData = $request->validate([
                'nombre' => 'required|max:255',
                'descripcion' => 'required|max:65535',
                'tipo' => 'required|in:Modelo_3d,Textura',
                'imagen' => 'image|mimes:' . Articulo::MIME_IMAGEN,
                'modelo' => 'file|max:1048576',
                'precio' => 'numeric|min:0|max:999.99',
                'categorias' => 'required|array|max:3',
                'categorias.*' => 'exists:categorias,id',
                'etiquetas' => 'required|array|max:3',
                'etiquetas.*' => 'exists:etiquetas,id',
            ]);

            $imagenNombre = 'Articulo_' . uniqid() . '_' . now()->format('d-m-Y') . '.' . $request->imagen->extension();
            $request->imagen->move(public_path('img/articulos'), $imagenNombre);
            $imagenPath = 'img/articulos/' . $imagenNombre;

            $modeloNombre = 'Articulo_' . uniqid() . '_' . now()->format('d-m-Y') . '.stl';
            $request->modelo->move(public_path('/img/modelos'), $modeloNombre);

            $articulo = Articulo::create([
                'nombre' => $request->nombre,
                'descripcion' => $request->descripcion,
                'tipo' => $request->tipo,
                'precio' => $request->precio,
                'modelo' => $modeloNombre,
                'imagen' => $imagenPath,
                'user_id' => auth()->id(),
            ]);

            // Crear un contador de Likes asociado al artículo con una cantidad inicial de 0
            // Crear contadores para el artículo
            $articulo->contadores()->createMany([
                ['nombre' => 'Likes', 'cantidad' => 0],
                ['nombre' => 'Visitas', 'cantidad' => 0],
            ]);

            $articulo->categorias()->attach($request->categorias);
            $articulo->etiquetas()->attach($request->etiquetas);

            // Mensaje flash para éxito
            session()->flash('success', 'Artículo creado con éxito.');

            return redirect()->route('articulos.show', $articulo);
        }




     /**
      * Display the specified resource.
      */
      public function show(Articulo $articulo)
    {
        // Obtener las categorías asociadas al artículo
        $categorias = $articulo->categorias()->get();

        // Obtener las etiquetas asociadas al artículo
        $etiquetas = $articulo->etiquetas()->get();

        // Obtener los comentarios asociados al artículo
        $comentarios = $articulo->comentarios()->get();

        // Obtener el usuario asociado al artículo
        $user = $articulo->user()->first();

        // Obtener los contadores asociados al artículo
        $contadorLikes = $articulo->contadores()->where('nombre', 'Likes')->first();

        // Verificar si el usuario ha comprado este artículo
        $comprado = false;
        $facturaId = null;
        if (auth()->check()) {
            $factura = Factura::where('articulo_id', $articulo->id)
                            ->where('user_id', auth()->id())
                            ->first();
            if ($factura) {
                $comprado = true;
                $facturaId = $factura->id;
            }
        }

        return Inertia::render('Articulos/Show', [
            'articulo' => $articulo,
            'categorias' => $categorias,
            'etiquetas' => $etiquetas,
            'comentarios' => $comentarios,
            'user' => $user,
            'contadorLikes' => $contadorLikes,
            'comprado' => $comprado,
            'facturaId' => $facturaId,
        ]);
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
         $categoriasArticulo = $articulo->categorias;
        $etiquetasArticulo = $articulo->etiquetas;

        return Inertia::render('Articulos/Edit', ['articulo' => $articulo, 'categorias' => $categorias, 'etiquetas' => $etiquetas , 'categoriasArticulo' => $categoriasArticulo, 'etiquetasArticulo' => $etiquetasArticulo]);
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

         $validatedData = $request->validate([
            'nombre' => 'required|max:255',
            'descripcion' => 'required|max:65535',
            'tipo' => 'required|in:Modelo_3d,Textura',
            'precio' => 'numeric|min:0|max:999.99',
            'categorias' => 'required|array|max:3',
            'categorias.*' => 'exists:categorias,id',
            'etiquetas' => 'required|array|max:3',
            'etiquetas.*' => 'exists:etiquetas,id',
        ]);

        $articulo->update($validatedData);

        $articulo->categorias()->sync($request->categorias);
        $articulo->etiquetas()->sync($request->etiquetas);

        // Mensaje flash para éxito
        session()->flash('success', 'Artículo actualizado con éxito.');

        return redirect()->route('articulos.show', $articulo);
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

        return;

     }


     public function cambiarImagen(Request $request, Articulo $articulo)
    {
        $request->validate([
            'imagen' => 'required|image|mimes:' . Articulo::MIME_IMAGEN,
        ]);

        // Eliminar la imagen anterior si existe
        if ($articulo->imagen) {
            Storage::delete($articulo->imagen);
        }

        // Guardar la nueva imagen
        $imagenNombre = 'Articulo_' . uniqid() . '_' . now()->format('d-m-Y') . '.' . $request->imagen->extension();
        $request->imagen->move(public_path('img/articulos'), $imagenNombre);
        $imagenPath = 'img/articulos/' . $imagenNombre;

        $articulo->update(['imagen' => $imagenPath]);

        return response()->json([
            'success' => true,
            'message' => 'Imagen Cambiada exitosamente',
        ]);
    }

    public function cambiarModelo(Request $request, Articulo $articulo)
    {
        $request->validate([
            'modelo' => 'required|file|max:1048576',
        ]);


        // Eliminar el modelo anterior si existe
        if ($articulo->modelo) {
            Storage::delete($articulo->modelo);
        }

        // Guardar el nuevo modelo
        $modeloNombre = 'Articulo_' . uniqid() . '_' . now()->format('d-m-Y') . '.stl';
        $request->modelo->move(public_path('/img/modelos'), $modeloNombre);

        $articulo->update(['modelo' => $modeloNombre]);

        return response()->json([
            'success' => true,
            'message' => 'Modelo Cambiado exitosamente',
        ]);
    }

     public function incrementarLikes(Articulo $articulo)
    {
        $contadorLikes = $articulo->contadores()->where('nombre', 'Likes')->first();
        $contadorLikes->cantidad += 1;
        $contadorLikes->save();

        return response()->json(['likes' => $contadorLikes->cantidad]);
    }

    public function decrementarLikes(Articulo $articulo)
    {
        $contadorLikes = $articulo->contadores()->where('nombre', 'Likes')->first();
        if ($contadorLikes && $contadorLikes->cantidad > 0) {
            $contadorLikes->cantidad -= 1;
            $contadorLikes->save();
            return response()->json(['likes' => $contadorLikes->cantidad]);
        } else {
            return response()->json(['error' => 'No se encontro el Articulo o los Likes son 0'], 404);
        }
    }


 }

