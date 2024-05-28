<?php

namespace Database\Seeders;

use App\Models\Articulo;
use App\Models\Categoria;
use App\Models\Etiqueta;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ArticuloSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Articulo::factory()->count(10)->create();

        // Obtener todas las categorías y etiquetas
        $categorias = Categoria::all();
        $etiquetas = Etiqueta::all();

        Articulo::create([
            'nombre' => 'Tapon de botella',
            'descripcion' => 'Este tapón de botella reutilizable no solo es una solución práctica y eficiente, sino también una apuesta por un estilo de vida más sostenible y responsable con el medio ambiente. Únete a nosotros en esta iniciativa y contribuye a reducir el desperdicio de plásticos de un solo uso',
            'tipo' => 'Modelo_3d',
            'imagen' => '/img/articulos/Cap.webp',
            'modelo' => 'Cap.stl',
            'precio' => 2.00,
            'user_id' => 2,

        ]);

        Articulo::create([
            'nombre' => 'Perchero',
            'descripcion' => 'Perchero elegante y funcional, diseñado con materiales robustos y sostenibles, perfecto para cualquier espacio y estilo de decoración. Fácil de montar y con capacidad para múltiples prendas, es la solución ideal para mantener el orden en tu hogar.',
            'tipo' => 'Modelo_3d',
            'imagen' => '/img/articulos/GeometricWallHook_V3.webp',
            'modelo' => 'GeometricWallHook_V3.stl',
            'precio' => 4.00,
            'user_id' => 2,

        ]);

        Articulo::create([
            'nombre' => 'Figurita Dragon',
            'descripcion' => 'Figura detallada de dragón, esculpida con precisión para capturar su majestuosidad y ferocidad, ideal para coleccionistas y amantes de la fantasía.',
            'tipo' => 'Modelo_3d',
            'imagen' => '/img/articulos/loubie_aria_dragon.jpg',
            'modelo' => 'loubie_aria_dragon.stl',
            'precio' => 10.00,
            'user_id' => 2,

        ]);

        Articulo::create([
            'nombre' => 'Cerdito',
            'descripcion' => 'Encantadora figura de cerdito, con detalles adorables y realistas, perfecta para decorar cualquier espacio con un toque de ternura.',
            'tipo' => 'Modelo_3d',
            'imagen' => '/img/articulos/Normal_Pig.webp',
            'modelo' => 'Normal_Pig.stl',
            'precio' => 8.00,
            'user_id' => 2,

        ]);

        Articulo::create([
            'nombre' => 'Oddish',
            'descripcion' => 'Figura de Oddish, fielmente detallada para capturar la esencia del Pokémon planta, perfecta para fans y coleccionistas.',
            'tipo' => 'Modelo_3d',
            'imagen' => '/img/articulos/Oddish.webp',
            'modelo' => 'Oddish.stl',
            'precio' => 12.00,
            'user_id' => 2,

        ]);

        Articulo::create([
            'nombre' => 'Craneo',
            'descripcion' => 'Cráneo esculpido con realismo, ideal para decoración temática o proyectos educativos.',
            'tipo' => 'Modelo_3d',
            'imagen' => '/img/articulos/Skull01.webp',
            'modelo' => 'Skull01.stl',
            'precio' => 12.00,
            'user_id' => 2,

        ]);

        Articulo::create([
            'nombre' => 'Fallout T60',
            'descripcion' => 'Casco de la Servoarmadura T60 de los videojuegos Fallout.',
            'tipo' => 'Modelo_3d',
            'imagen' => '/img/articulos/T60_Fallout4_main.webp',
            'modelo' => 'T60_Fallout4_main.stl',
            'precio' => 18.00,
            'user_id' => 2,
        ]);


        // Obtener todos los artículos
        $articulos = Articulo::all();

        // Asignar categorías y etiquetas aleatorias a cada artículo
        foreach ($articulos as $articulo) {
            // Asignar categorías aleatorias
            $categoriasAleatorias = $categorias->random(rand(1, 3));
            $articulo->categorias()->attach($categoriasAleatorias);

            // Asignar etiquetas aleatorias
            $etiquetasAleatorias = $etiquetas->random(rand(1, 3));
            $articulo->etiquetas()->attach($etiquetasAleatorias);
        }
    }
}
