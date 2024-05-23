<?php

namespace Database\Seeders;

use App\Models\Articulo;
use App\Models\Contador;
use App\Models\Noticia;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ContadorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Obtener todos los artículos y noticias
        $articulos = Articulo::all();
        $noticias = Noticia::all();

        // Crear contadores para cada artículo
        foreach ($articulos as $articulo) {
            // Crear contador para Likes
            $contadorLikes = Contador::create([
                'nombre' => 'Likes',
                'cantidad' => 0,
                'objetivo_type' => Articulo::class,
                'objetivo_id' => $articulo->id,
            ]);

            // Crear contador para Visitas
            $contadorVisitas = Contador::create([
                'nombre' => 'Visitas',
                'cantidad' => 0,
                'objetivo_type' => Articulo::class,
                'objetivo_id' => $articulo->id,
            ]);
        }

        // Crear contadores para cada noticia
        foreach ($noticias as $noticia) {
            // Crear contador para Likes
            $contadorLikes = Contador::create([
                'nombre' => 'Likes',
                'cantidad' => 0,
                'objetivo_type' => Noticia::class,
                'objetivo_id' => $noticia->id,
            ]);

            // Crear contador para Visitas
            $contadorVisitas = Contador::create([
                'nombre' => 'Visitas',
                'cantidad' => 0,
                'objetivo_type' => Noticia::class,
                'objetivo_id' => $noticia->id,
            ]);
        }
    }
}
