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
class ObjetivoContadorFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Objetivo_Contador::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $objetivos = [
            Noticia::class,
            Articulo::class,
            User::class,
            Comentario::class,
        ];

        $objetivoType = $this->faker->randomElement($objetivos);

        return [
            'contador_id' => Contador::factory()->create()->id,
            'objetivo_type' => $objetivoType,
            'objetivo_id' => function () use ($objetivoType) {
                return $objetivoType::factory()->create()->id;
            },
            'cantidad' => $this->faker->numberBetween(1, 100),
        ];
    }
}
