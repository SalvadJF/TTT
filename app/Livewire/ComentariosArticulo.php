<?php

namespace App\Http\Livewire;

use Livewire\Component;
use App\Models\Articulo;
use App\Models\Comentario;

class ComentariosArticulo extends Component
{
    public $articulo;
    public $contenido;

    public function render()
    {
        return view('livewire.comentarios-articulo', [
            'comentarios' => $this->articulo->comentarios,
        ]);
    }

    public function agregarComentario()
    {
        $this->validate([
            'contenido' => 'required',
        ]);

        $this->articulo->comentarios()->create([
            'contenido' => $this->contenido,
            'user_id' => auth()->id(),
        ]);

        $this->contenido = '';

        $this->emit('comentarioAgregado');
    }
}

