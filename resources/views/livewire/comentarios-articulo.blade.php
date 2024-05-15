<div>
    <!-- Mostrar comentarios existentes -->
    @foreach($comentarios as $comentario)
        <div>{{ $comentario->contenido }}</div>
    @endforeach

    <!-- Formulario para agregar nuevo comentario -->
    <form wire:submit.prevent="agregarComentario">
        <textarea wire:model.defer="contenido" required></textarea>
        <button type="submit">Agregar Comentario</button>
    </form>
</div>
