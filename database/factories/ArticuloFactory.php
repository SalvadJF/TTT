<?php

namespace Database\Factories;

use App\Models\Articulo;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Articulo>
 */
class ArticuloFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Articulo::class;


    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'nombre' => $this->faker->name,
            'descripcion' => $this->faker->sentence,
            'licencia' => $this->faker->randomElement(['CC-BY', 'CC-BY-SA', 'CC-BY-ND', 'CC-BY-NC', 'CC-BY-NC-SA', 'CC-BY-NC-ND']),
            'tipo' => $this->faker->randomElement(['Modelo_3d', 'Textura']),
            'user_id' => function () {
                // Si deseas asignar un usuario existente
                return User::inRandomOrder()->first()->id;
            },
        ];
    }
}
