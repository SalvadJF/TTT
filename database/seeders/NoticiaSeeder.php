<?php

namespace Database\Seeders;

use App\Models\Noticia;
use App\Models\Categoria;
use App\Models\Etiqueta;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class NoticiaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        // Crear noticias y obtenerlas
        $noticias = Noticia::factory()->count(10)->create();

        // Asignar etiquetas a las noticias
        $etiquetas = Etiqueta::all();
        foreach ($noticias as $noticia) {
            $noticia->etiquetas()->attach(
                $etiquetas->random(rand(1, 3))->pluck('id')->toArray()
            );
        }
    }
}

