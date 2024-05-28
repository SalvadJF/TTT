<?php

namespace App\Http\Controllers;

use App\Models\Articulo;
use App\Models\Comentario;
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
        $ultimoComentario = Comentario::latest()->first();

        $facturasCount = Factura::count();
        $ultimaFactura = Factura::latest()->first();

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
            'ultimaFactura' => $ultimaFactura
        ]);

    }

    public function usuarios()
    {
        $admin = Auth::user();

        // Verificar si el usuario es administrador
        if (!$admin->isAdmin()) {
            abort(403, 'No tienes permisos para acceder a esta página.');
        }

        $usuarios = User::orderBy('id')->paginate(0);

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

        $noticias = Noticia::with('usuario')->orderBy('id')->paginate(0);


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

        $articulos = Articulo::with('user')->orderBy('id')->paginate(0);

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

        $comentarios = Comentario::with('user', 'comentable')->orderBy('id')->paginate(0);


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

        $facturas = Factura::with(['user , articulo'])->orderBy('id')->paginate(0);

        return Inertia::render('Admin/Facturas', [
            'facturas' => $facturas,
            'admin' => $admin,
        ]);

    }
}

