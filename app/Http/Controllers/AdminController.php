<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Articulo;
use App\Models\Noticia;
use App\Models\User;

class AdminController extends Controller
{
    public function index()
    {
        $usuarios = User::orderBy('id')->paginate(10);
        $noticias = Noticia::orderBy('id')->paginate(10);
        $articulos = Articulo::orderBy('id')->paginate(10);
        return view('admin.index', compact('usuarios','noticias', 'articulos'));
    }
}
