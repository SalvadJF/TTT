<?php

namespace App\Http\Controllers;

use App\Models\Articulo;
use App\Models\Categoria;
use App\Models\Comentario;
use App\Models\Etiqueta;
use App\Models\Factura;
use App\Models\Noticia;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class AdminController extends Controller
{
    public function index()
    {
        $admin = Auth::user();

        // Verificar si el usuario es administrador
        if (!$admin->isAdmin()) {
            abort(403, 'No tienes permisos para acceder a esta página.');
        }

        $usuariosCount = User::count();
        $ultimoUsuario = User::latest()->first();

        $noticiasCount = Noticia::count();
        $ultimaNoticia = Noticia::latest()->first();

        $articulosCount = Articulo::count();
        $ultimoArticulo = Articulo::latest()->first();

        $comentariosCount = Comentario::count();
        $ultimoComentario = Comentario::with('user')->latest()->first();

        $facturasCount = Factura::count();
        $ultimaFactura = Factura::latest()->first();

        $categoriasCount = Categoria::count();
        $ultimaCategoria = Categoria::latest()->first();

        $etiquetasCount = Etiqueta::count();
        $ultimaEtiqueta = Etiqueta::latest()->first();

        $otrosCount = $categoriasCount + $etiquetasCount;
        $ultimosOtros = collect([$ultimaCategoria, $ultimaEtiqueta])->filter()->sortByDesc('created_at')->first();

        return Inertia::render('Admin/Index', [
            'admin' => $admin,
            'usuariosCount' => $usuariosCount,
            'ultimoUsuario' => $ultimoUsuario,
            'noticiasCount' => $noticiasCount,
            'ultimaNoticia' => $ultimaNoticia,
            'articulosCount' => $articulosCount,
            'ultimoArticulo' => $ultimoArticulo,
            'comentariosCount' => $comentariosCount,
            'ultimoComentario' => $ultimoComentario,
            'facturasCount' => $facturasCount,
            'ultimaFactura' => $ultimaFactura,
            'otrosCount' => $otrosCount,
            'ultimosOtros' => $ultimosOtros
        ]);

    }

    public function usuarios()
    {
        $admin = Auth::user();

        // Verificar si el usuario es administrador
        if (!$admin->isAdmin()) {
            abort(403, 'No tienes permisos para acceder a esta página.');
        }

        $usuarios = User::orderBy('id')->paginate(-2);

        return Inertia::render('Admin/Usuarios', [
            'usuarios' => $usuarios,
            'admin' => $admin,
        ]);

    }

    public function noticias()
    {
        $admin = Auth::user();

        // Verificar si el usuario es administrador
        if (!$admin->isAdmin()) {
            abort(403, 'No tienes permisos para acceder a esta página.');
        }

        $noticias = Noticia::with('usuario')->orderBy('id')->paginate(-2);


        return Inertia::render('Admin/Noticias', [
            'noticias' => $noticias,
            'admin' => $admin,
        ]);

    }

    public function articulos()
    {
        $admin = Auth::user();

        // Verificar si el usuario es administrador
        if (!$admin->isAdmin()) {
            abort(403, 'No tienes permisos para acceder a esta página.');
        }

        $articulos = Articulo::with(['user', 'contadores' => function ($query) {
            $query->where('nombre', 'Likes');
        }])->orderBy('id')->paginate(-2);

        return Inertia::render('Admin/Articulos', [
            'articulos' => $articulos,
            'admin' => $admin,
        ]);

    }

    public function comentarios()
    {
        $admin = Auth::user();

        // Verificar si el usuario es administrador
        if (!$admin->isAdmin()) {
            abort(403, 'No tienes permisos para acceder a esta página.');
        }

        $comentarios = Comentario::with('user', 'comentable')->orderBy('id')->paginate(-2);


        return Inertia::render('Admin/Comentarios', [
            'comentarios' => $comentarios,
            'admin' => $admin,
        ]);

    }

    public function facturas()
    {
        $admin = Auth::user();

        // Verificar si el usuario es administrador
        if (!$admin->isAdmin()) {
            abort(403, 'No tienes permisos para acceder a esta página.');
        }

        $facturas = Factura::with(['user', 'articulo.user'])->orderBy('id')->paginate(-2);


        return Inertia::render('Admin/Facturas', [
            'facturas' => $facturas,
            'admin' => $admin,
        ]);

    }

    public function otros()
    {
        $admin = Auth::user();

        // Verificar si el usuario es administrador
        if (!$admin->isAdmin()) {
            abort(403, 'No tienes permisos para acceder a esta página.');
        }

        $categorias = Categoria::orderBy('id')->get();
        $etiquetas = Etiqueta::orderBy('id')->get();

        return Inertia::render('Admin/Otros', [
            'categorias' => $categorias,
            'etiquetas' => $etiquetas,
            'admin' => $admin,
        ]);
    }
}

