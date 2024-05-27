<?php

namespace App\Http\Controllers;

use App\Models\Noticia;
use App\Models\Articulo;
use Inertia\Inertia;


class DashboardController extends Controller
{
    public function index()
    {
        $articulos = Articulo::with(['user', 'contadores' => function ($query) {
            $query->where('nombre', 'Likes');
        }])->orderBy('created_at', 'desc')->latest()->paginate(4);

        $noticias = Noticia::orderBy('created_at', 'desc')->latest()->paginate(4);

        return Inertia::render('Dashboard', [
            'noticias' => $noticias,
            'articulos' => $articulos,
        ]);
    }

}
