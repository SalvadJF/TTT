<?php

namespace Tests\Feature;

use App\Models\Etiqueta;
use App\Models\User;
use App\Models\Noticia;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class NoticiaTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function it_displays_a_list_of_noticias()
    {
        $user = User::factory()->create();
        $this->actingAs($user);

        $noticia1 = Noticia::factory()->create(['titulo' => 'Noticia 1', 'user_id' => $user->id]);
        $noticia2 = Noticia::factory()->create(['titulo' => 'Noticia 2', 'user_id' => $user->id]);

        $response = $this->get('/noticias');

        $response->assertStatus(200);
        $response->assertSee('Noticia 1');
        $response->assertSee('Noticia 2');
    }

    /** @test */
    public function it_updates_an_existing_noticia()
    {
        $user = User::factory()->create();
        $this->actingAs($user);

        $noticia = Noticia::factory()->create(['titulo' => 'Noticia Antigua', 'user_id' => $user->id]);
        $etiquetas = Etiqueta::factory()->count(3)->create();

        $response = $this->put("/noticias/{$noticia->id}", [
            'titulo' => 'Noticia Actualizada',
            'resumen' => 'Resumen actualizado',
            'contenido' => 'Contenido actualizado',
            'tipo' => 'Informacion',
            'etiquetas' => $etiquetas->pluck('id')->toArray(),
        ]);

        $response->assertRedirect("/noticias/{$noticia->id}");
        $this->assertDatabaseHas('noticias', ['titulo' => 'Noticia Actualizada']);
    }

}
