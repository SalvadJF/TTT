<?php

namespace Tests\Feature;

use App\Models\User;
use App\Models\Articulo;
use App\Models\Categoria;
use App\Models\Etiqueta;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ArticuloTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function it_displays_a_list_of_articulos()
    {
        $user = User::factory()->create();
        $this->actingAs($user);

        $articulo1 = Articulo::factory()->create(['nombre' => 'Articulo 1', 'user_id' => $user->id]);
        $articulo2 = Articulo::factory()->create(['nombre' => 'Articulo 2', 'user_id' => $user->id]);

        $response = $this->get('/articulos');

        $response->assertStatus(200);
        $response->assertSee('Articulo 1');
        $response->assertSee('Articulo 2');
    }

    /** @test */
    public function it_updates_an_existing_articulo()
    {
        $user = User::factory()->create();
        $this->actingAs($user);

        $articulo = Articulo::factory()->create(['nombre' => 'Articulo Antiguo', 'user_id' => $user->id]);
        $categorias = Categoria::factory()->count(3)->create();
        $etiquetas = Etiqueta::factory()->count(3)->create();

        $response = $this->put("/articulos/{$articulo->id}", [
            'nombre' => 'Articulo Actualizado',
            'descripcion' => 'Descripción actualizada',
            'tipo' => 'Modelo_3d',
            'licencia' => 'CC0',
            'precio' => 75.00,
            'categorias' => $categorias->pluck('id')->toArray(),
            'etiquetas' => $etiquetas->pluck('id')->toArray(),
        ]);

        $response->assertRedirect("/articulos/{$articulo->id}");
        $this->assertDatabaseHas('articulos', ['nombre' => 'Articulo Actualizado']);
    }

}
