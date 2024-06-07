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
    public function it_filters_articulos_by_search_term()
    {
        $user = User::factory()->create();
        $this->actingAs($user);

        $articulo1 = Articulo::factory()->create(['nombre' => 'Unique Articulo', 'user_id' => $user->id]);
        $articulo2 = Articulo::factory()->create(['nombre' => 'Another Articulo', 'user_id' => $user->id]);

        $response = $this->get('/articulos?search=Unique');

        $response->assertStatus(200);
        $response->assertSee('Unique Articulo');
        $response->assertDontSee('Another Articulo');
    }

    /** @test */
    public function it_filters_articulos_by_type()
    {
        $user = User::factory()->create();
        $this->actingAs($user);

        $articulo1 = Articulo::factory()->create(['nombre' => '3D Model Articulo', 'tipo' => 'Modelo_3D', 'user_id' => $user->id]);
        $articulo2 = Articulo::factory()->create(['nombre' => 'Texture Articulo', 'tipo' => 'Textura', 'user_id' => $user->id]);

        $response = $this->get('/articulos?type=Modelo_3D');

        $response->assertStatus(200);
        $response->assertSee('3D Model Articulo');
        $response->assertDontSee('Texture Articulo');
    }

    /** @test */
    public function it_creates_a_new_articulo()
    {
        $user = User::factory()->create();
        $this->actingAs($user);

        $categorias = Categoria::factory()->count(3)->create();
        $etiquetas = Etiqueta::factory()->count(3)->create();

        $response = $this->post('/articulos', [
            'nombre' => 'Nuevo Articulo',
            'descripcion' => 'Descripción del articulo',
            'tipo' => 'Modelo_3d',
            'licencia' => 'CC0',
            'precio' => 50.00,
            'categorias' => $categorias->pluck('id')->toArray(),
            'etiquetas' => $etiquetas->pluck('id')->toArray(),
        ]);

        $response->assertRedirect('/articulos');
        $this->assertDatabaseHas('articulos', ['nombre' => 'Nuevo Articulo']);
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

    /** @test */
    public function it_deletes_an_articulo()
    {
        $user = User::factory()->create();
        $this->actingAs($user);

        $articulo = Articulo::factory()->create(['nombre' => 'Articulo a Eliminar', 'user_id' => $user->id]);

        $response = $this->delete("/articulos/{$articulo->id}");

        $response->assertStatus(204);
        $this->assertDatabaseMissing('articulos', ['id' => $articulo->id]);
    }



}
