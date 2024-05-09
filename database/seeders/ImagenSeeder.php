<?php

namespace Database\Seeders;

use App\Models\Articulo;
use App\Models\Imagen;
use App\Models\Noticia;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ImagenSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Imagen::factory()->create();

        // Obtener la imagen por defecto
        $imagenPorDefecto = Imagen::where('nombre', 'default')->first();

        // Asignar la imagen por defecto a todos los artículos
        Articulo::all()->each(function ($articulo) use ($imagenPorDefecto) {
            $articulo->imagenes()->attach($imagenPorDefecto);
        });

        // Asignar la imagen por defecto a todas las noticias
        Noticia::all()->each(function ($noticia) use ($imagenPorDefecto) {
            $noticia->imagenes()->attach($imagenPorDefecto);
        });
    }
}
