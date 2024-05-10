<?php

namespace Database\Factories;

use App\Models\Articulo;
use App\Models\Comentario;
use App\Models\Contador;
use App\Models\Noticia;
use App\Models\Objetivo_Contador;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Objetivo_Contador>
 */
class Objetivo_ContadorFactory extends Factory
{
    protected $model = Objetivo_Contador::class;

    public function definition()
    {
        // Obtener todos los contadores de likes y visitas
        $contadorLikes = Contador::where('nombre', 'Likes')->first();
        $contadorVisitas = Contador::where('nombre', 'Visitas')->first();

        // Obtener todos los registros existentes de los modelos
        $users = User::all();
        $noticias = Noticia::all();
        $articulos = Articulo::all();
        $comentarios = Comentario::all();

        // Crear registros para todos los usuarios
        foreach ($users as $user) {
            Objetivo_Contador::factory()->create([
                'contador_id' => $contadorLikes->id,
                'objetivo_type' => User::class,
                'objetivo_id' => $user->id,
                'cantidad' => $this->faker->numberBetween(1, 100),
            ]);

            Objetivo_Contador::factory()->create([
                'contador_id' => $contadorVisitas->id,
                'objetivo_type' => User::class,
                'objetivo_id' => $user->id,
                'cantidad' => $this->faker->numberBetween(1, 100),
            ]);
        }

        // Crear registros para todas las noticias
        foreach ($noticias as $noticia) {
            Objetivo_Contador::factory()->create([
                'contador_id' => $contadorLikes->id,
                'objetivo_type' => Noticia::class,
                'objetivo_id' => $noticia->id,
                'cantidad' => $this->faker->numberBetween(1, 100),
            ]);

            Objetivo_Contador::factory()->create([
                'contador_id' => $contadorVisitas->id,
                'objetivo_type' => Noticia::class,
                'objetivo_id' => $noticia->id,
                'cantidad' => $this->faker->numberBetween(1, 100),
            ]);
        }

        // Crear registros para todos los artículos
        foreach ($articulos as $articulo) {
            Objetivo_Contador::factory()->create([
                'contador_id' => $contadorLikes->id,
                'objetivo_type' => Articulo::class,
                'objetivo_id' => $articulo->id,
                'cantidad' => $this->faker->numberBetween(1, 100),
            ]);

            Objetivo_Contador::factory()->create([
                'contador_id' => $contadorVisitas->id,
                'objetivo_type' => Articulo::class,
                'objetivo_id' => $articulo->id,
                'cantidad' => $this->faker->numberBetween(1, 100),
            ]);
        }

        // Crear registros para todos los comentarios
        foreach ($comentarios as $comentario) {
            Objetivo_Contador::factory()->create([
                'contador_id' => $contadorLikes->id,
                'objetivo_type' => Comentario::class,
                'objetivo_id' => $comentario->id,
                'cantidad' => $this->faker->numberBetween(1, 100),
            ]);

            Objetivo_Contador::factory()->create([
                'contador_id' => $contadorVisitas->id,
                'objetivo_type' => comentario::class,
                'objetivo_id' => $comentario->id,
                'cantidad' => $this->faker->numberBetween(1, 100),
            ]);
        }
    }
}
