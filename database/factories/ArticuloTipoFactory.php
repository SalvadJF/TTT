<?php

namespace Database\Factories;

use App\Models\Articulo;
use App\Models\Articulo_tipo;
use App\Models\Modelo;
use App\Models\Textura;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Articulo_tipo>
 */
class ArticuloTipoFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Articulo_tipo::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $tipos = [
            Modelo::class,
            Textura::class,
        ];

        $tipoType = $this->faker->randomElement($tipos);

        return [
            'articulo_id' => Articulo::factory()->create()->id,
            'tipo_type' => $tipoType,
            'tipo_id' => function () use ($tipoType) {
                return $tipoType::factory()->create()->id;
            },
            'URL' => $this->faker->url,
        ];
    }
}
