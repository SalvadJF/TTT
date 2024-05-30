<?php

namespace Database\Factories;

use App\Models\Noticia;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Noticia>
 */
class NoticiaFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Noticia::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'titulo' => $this->faker->name(),
            'resumen' => $this->faker->name(),
            'contenido' => $this->faker->paragraphs(1, true),
            'tipo' => $this->faker->randomElement(['Cronica', 'Entrevista', 'Informacion']),
            'user_id' => function () {
                // Asigna un usuario existente
                return User::inRandomOrder()->first()->id;
            },
        ];
    }
}
