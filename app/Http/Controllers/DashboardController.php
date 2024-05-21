<?php

namespace App\Http\Controllers;

use App\Models\Noticia;
use App\Models\Articulo;
use Inertia\Inertia;


class DashboardController extends Controller
{
    public function index()
    {
        $articulos = Articulo::orderBy('created_at', 'desc')->latest()->paginate(4);

        $noticias = Noticia::orderBy('created_at', 'desc')->latest()->paginate(4);

        return Inertia::render( 'Dashboard', [
            'noticias' => $noticias,
            'articulos' => $articulos,
        ]);
    }
}
