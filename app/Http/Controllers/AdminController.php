<?php

namespace App\Http\Controllers;

use App\Models\Articulo;
use App\Models\Comentario;
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

        $usuarios = User::all();
        $ultimoUsuario = User::latest()->first();

        $noticias = Noticia::all();
        $ultimaNoticia = Noticia::latest()->first();

        $articulos = Articulo::all();
        $ultimoArticulo = Articulo::latest()->first();

        $comentarios = Comentario::all();
        $ultimoComentario = Comentario::latest()->first();

        return Inertia::render('Admin/Index', [
            'admin' => $admin,
            'usuarios' => $usuarios,
            'ultimoUsuario' => $ultimoUsuario,
            'noticias' => $noticias,
            'ultimaNoticia' => $ultimaNoticia,
            'articulos' => $articulos,
            'ultimoArticulo' => $ultimoArticulo,
            'comentarios' => $comentarios,
            'ultimoComentario' => $ultimoComentario,
        ]);
    }

    public function usuarios()
    {
        $admin = Auth::user();

        // Verificar si el usuario es administrador
        if (!$admin->isAdmin()) {
            abort(403, 'No tienes permisos para acceder a esta página.');
        }

        $usuarios = User::orderBy('id')->paginate(10);

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

        $noticias = Noticia::orderBy('id')->paginate(10);

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

        $articulos = Articulo::orderBy('id')->paginate(10);

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

        $comentarios = Comentario::orderBy('id')->paginate(10);

        return Inertia::render('Admin/Comentarios', [
            'comentarios' => $comentarios,
            'admin' => $admin,
        ]);

    }
}

