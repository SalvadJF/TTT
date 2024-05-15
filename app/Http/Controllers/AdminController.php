<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Articulo;
use App\Models\Comentario;
use App\Models\Noticia;
use App\Models\User;
use Illuminate\Http\Request;
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

        return view('admin.index', compact('admin', 
        'usuarios', 'ultimoUsuario', 
        'noticias', 'ultimaNoticia', 
        'articulos', 'ultimoArticulo', 
        'comentarios', 'ultimoComentario'));
    }

    public function usuarios()
    {
        $admin = Auth::user();
        
        // Verificar si el usuario es administrador
        if (!$admin->isAdmin()) {
            abort(403, 'No tienes permisos para acceder a esta página.');
        }

        $usuarios = User::orderBy('id')->paginate(10);

        return view('admin.usuarios', compact('usuarios'));
    }

    public function noticias()
    {
        $admin = Auth::user();
        
        // Verificar si el usuario es administrador
        if (!$admin->isAdmin()) {
            abort(403, 'No tienes permisos para acceder a esta página.');
        }

        $noticias = Noticia::orderBy('id')->paginate(10);

        return view('admin.noticias', compact('noticias'));
    }

    public function articulos()
    {
        $admin = Auth::user();
        
        // Verificar si el usuario es administrador
        if (!$admin->isAdmin()) {
            abort(403, 'No tienes permisos para acceder a esta página.');
        }

        $articulos = Articulo::orderBy('id')->paginate(10);

        return view('admin.articulos', compact('articulos'));
    }

    public function comentarios()
    {
        $admin = Auth::user();
        
        // Verificar si el usuario es administrador
        if (!$admin->isAdmin()) {
            abort(403, 'No tienes permisos para acceder a esta página.');
        }

        $comentarios = Comentario::orderBy('id')->paginate(10);

        return view('admin.comentarios', compact('comentarios'));
    }
}
