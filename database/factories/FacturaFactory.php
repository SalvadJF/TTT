<?php

namespace Database\Factories;

use App\Models\Factura;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Factura>
 */
class FacturaFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Factura::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'precio_venta' => $this->faker->randomFloat(2, 0, 999999), // Genera un precio aleatorio con 2 decimales
            'user_id' => function () {
                // Asigna un usuario existente
                return User::inRandomOrder()->first()->id;
            },
        ];
    }
}
