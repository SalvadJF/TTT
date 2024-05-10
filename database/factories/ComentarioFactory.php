<?php

namespace Database\Factories;

use App\Models\Articulo;
use App\Models\Comentario;
use App\Models\Noticia;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Comentario>
 */
class ComentarioFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Comentario::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $models = [
            Articulo::class,
            Noticia::class,
            User::class,
            Comentario::class,
        ];

        $modelType = $this->faker->randomElement($models);

        return [
            'contenido' => $this->faker->paragraph,
            'comentable_type' => $modelType,
            'comentable_id' => function () use ($modelType) {
                return $modelType::factory()->create()->id;
            },
            'user_id' => function () {
                return User::inRandomOrder()->first()->id;
            },
        ];
    }
}
