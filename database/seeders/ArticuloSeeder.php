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
    // Crear artículos con la factoría
    $factoryArticulos = Articulo::factory()->count(1)->create();

    // Obtener la fecha de creación del último artículo creado por la factoría
    $lastFactoryCreatedAt = $factoryArticulos->last()->created_at;

    // Incrementar la fecha en un día para los artículos creados manualmente
    $manualCreatedAt = $lastFactoryCreatedAt->copy()->addDay();

    Articulo::create([
        'nombre' => 'Tapon de botella',
        'descripcion' => 'Este tapón de botella reutilizable no solo es una solución práctica y eficiente, sino también una apuesta por un estilo de vida más sostenible y responsable con el medio ambiente. Únete a nosotros en esta iniciativa y contribuye a reducir el desperdicio de plásticos de un solo uso',
        'tipo' => 'Modelo_3d',
        'imagen' => '/img/articulos/Cap.webp',
        'modelo' => 'Cap.stl',
        'precio' => 2.00,
        'user_id' => 2,
        'licencia'  => 'CC-BY-ND',
        'created_at' => $manualCreatedAt,
        'updated_at' => $manualCreatedAt,
    ]);

    Articulo::create([
        'nombre' => 'Perchero',
        'descripcion' => 'Perchero elegante y funcional, diseñado con materiales robustos y sostenibles, perfecto para cualquier espacio y estilo de decoración. Fácil de montar y con capacidad para múltiples prendas, es la solución ideal para mantener el orden en tu hogar.',
        'tipo' => 'Modelo_3d',
        'imagen' => '/img/articulos/GeometricWallHook_V3.webp',
        'modelo' => 'GeometricWallHook_V3.stl',
        'precio' => 4.00,
        'user_id' => 3,
        'licencia'  => 'CC-BY',
        'created_at' => $manualCreatedAt,
        'updated_at' => $manualCreatedAt,
    ]);

    Articulo::create([
        'nombre' => 'Figurita Dragon',
        'descripcion' => 'Figura detallada de dragón, esculpida con precisión para capturar su majestuosidad y ferocidad, ideal para coleccionistas y amantes de la fantasía.',
        'tipo' => 'Modelo_3d',
        'imagen' => '/img/articulos/loubie_aria_dragon.jpg',
        'modelo' => 'loubie_aria_dragon.stl',
        'precio' => 10.00,
        'user_id' => 4,
        'licencia'  => 'CC-BY-NC-SA',
        'created_at' => $manualCreatedAt,
        'updated_at' => $manualCreatedAt,
    ]);

    Articulo::create([
        'nombre' => 'Cerdito',
        'descripcion' => 'Encantadora figura de cerdito, con detalles adorables y realistas, perfecta para decorar cualquier espacio con un toque de ternura.',
        'tipo' => 'Modelo_3d',
        'imagen' => '/img/articulos/Normal_Pig.webp',
        'modelo' => 'Normal_Pig.stl',
        'precio' => 8.00,
        'user_id' => 5,
        'licencia'  => 'CC-BY-NC-ND',
        'created_at' => $manualCreatedAt,
        'updated_at' => $manualCreatedAt,
    ]);

    Articulo::create([
        'nombre' => 'Oddish',
        'descripcion' => 'Figura de Oddish, fielmente detallada para capturar la esencia del Pokémon planta, perfecta para fans y coleccionistas.',
        'tipo' => 'Modelo_3d',
        'imagen' => '/img/articulos/Oddish.webp',
        'modelo' => 'Oddish.stl',
        'precio' => 12.00,
        'user_id' => 6,
        'licencia'  => 'CC-BY-NC-ND',
        'created_at' => $manualCreatedAt,
        'updated_at' => $manualCreatedAt,
    ]);

    Articulo::create([
        'nombre' => 'Craneo',
        'descripcion' => 'Cráneo esculpido con realismo, ideal para decoración temática o proyectos educativos.',
        'tipo' => 'Modelo_3d',
        'imagen' => '/img/articulos/Skull01.webp',
        'modelo' => 'Skull01.stl',
        'precio' => 12.00,
        'user_id' => 7,
        'licencia'  => 'CC-BY-NC-ND',
        'created_at' => $manualCreatedAt,
        'updated_at' => $manualCreatedAt,
    ]);

    Articulo::create([
        'nombre' => 'Fallout T60',
        'descripcion' => 'Casco de la Servoarmadura T60 de los videojuegos Fallout.',
        'tipo' => 'Modelo_3d',
        'imagen' => '/img/articulos/T60_Fallout4_main.webp',
        'modelo' => 'T60_Fallout4_main.stl',
        'precio' => 18.00,
        'user_id' => 8,
        'licencia'  => 'CC0',
        'created_at' => $manualCreatedAt,
        'updated_at' => $manualCreatedAt,
    ]);

    Articulo::create([
        'nombre' => 'Pallet',
        'descripcion' => 'Modelo de Pallet, para decoraciones o maquetas de arquitectura.',
        'tipo' => 'Modelo_3d',
        'imagen' => '/img/articulos/pallet.webp',
        'modelo' => 'pallet.stl',
        'precio' => 1.00,
        'user_id' => 9,
        'licencia'  => 'CC-BY-NC',
        'created_at' => $manualCreatedAt,
        'updated_at' => $manualCreatedAt,
    ]);

    Articulo::create([
        'nombre' => 'Gatitos',
        'descripcion' => 'Figuritas de dos gatitos cariñosos, ideal para decorar tu casa.',
        'tipo' => 'Modelo_3d',
        'imagen' => '/img/articulos/2_Nuzzling_Cats.webp',
        'modelo' => '2_Nuzzling_Cats.stl',
        'precio' => 20.00,
        'user_id' => 3,
        'licencia'  => 'CC-BY',
        'created_at' => $manualCreatedAt,
        'updated_at' => $manualCreatedAt,
    ]);

    Articulo::create([
        'nombre' => 'Gafas Cool',
        'descripcion' => 'Gafa con estilo pixel para hacerte el chulo.',
        'tipo' => 'Textura',
        'imagen' => '/img/articulos/ThugLifeGlasses.webp',
        'modelo' => 'ThugLifeGlasses.stl',
        'precio' => 0.00,
        'user_id' => 4,
        'licencia'  => 'CC0',
        'created_at' => $manualCreatedAt,
        'updated_at' => $manualCreatedAt,
    ]);

    Articulo::create([
        'nombre' => 'Pata de Mesa',
        'descripcion' => 'Pata de repuesto para arreglar los desequilibros de tu mesa.',
        'tipo' => 'Modelo_3d',
        'imagen' => '/img/articulos/UpperPart.webp',
        'modelo' => 'UpperPart.stl',
        'precio' => 3.00,
        'user_id' => 5,
        'licencia'  => 'CC-BY-NC-SA',
        'created_at' => $manualCreatedAt,
        'updated_at' => $manualCreatedAt,
    ]);

    Articulo::create([
        'nombre' => 'Soporte para Nintendo Switch OLED',
        'descripcion' => 'Soporte para Nintendo Switch con tematica de cristales.',
        'tipo' => 'Modelo_3d',
        'imagen' => '/img/articulos/OLED_front_only.webp',
        'modelo' => 'OLED_front_only.stl',
        'precio' => 15.00,
        'user_id' => 2,
        'licencia'  => 'CC-BY-ND',
        'created_at' => $manualCreatedAt,
        'updated_at' => $manualCreatedAt,
    ]);

    Articulo::create([
        'nombre' => 'Elefante',
        'descripcion' => 'Figurita de Elefante para decorar tu jardin.',
        'tipo' => 'Modelo_3d',
        'imagen' => '/img/articulos/elefanteB.webp',
        'modelo' => 'elefanteB.stl',
        'precio' => 1.00,
        'user_id' => 6,
        'licencia'  => 'CC0',
        'created_at' => $manualCreatedAt,
        'updated_at' => $manualCreatedAt,
    ]);

    Articulo::create([
        'nombre' => 'Recogedor de Pienso',
        'descripcion' => 'Recogedor reutilizable para alimentar a tus mascotas.',
        'tipo' => 'Modelo_3d',
        'imagen' => '/img/articulos/Scoop.webp',
        'modelo' => 'Scoop.stl',
        'precio' => 8.00,
        'user_id' => 7,
        'licencia'  => 'CC-BY-SA',
        'created_at' => $manualCreatedAt,
        'updated_at' => $manualCreatedAt,
    ]);

    Articulo::create([
        'nombre' => 'Codigo Morse',
        'descripcion' => 'Plantilla con el abecedario en codigo morse.',
        'tipo' => 'Textura',
        'imagen' => '/img/articulos/Morse_Code_Template_Letters.webp',
        'modelo' => 'Morse_Code_Template_Letters.stl',
        'precio' => 10.00,
        'user_id' => 8,
        'licencia'  => 'CC0',
        'created_at' => $manualCreatedAt,
        'updated_at' => $manualCreatedAt,
    ]);

    // Obtener todas las categorías y etiquetas
    $categorias = Categoria::all();
    $etiquetas = Etiqueta::all();

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
