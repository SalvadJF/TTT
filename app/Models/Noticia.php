<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Noticia extends Model
{
    use HasFactory;

    public function usuario()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function objetivos_contadores()
    {
        return $this->morphMany(Objetivo_Contador::class, 'objetivo');
    }

    public function etiquetas()
    {
        return $this->belongsToMany(Etiqueta::class, 'noticias_etiquetas', 'noticia_id', 'etiqueta_id');
    }

    public function categorias()
    {
        return $this->belongsToMany(Categoria::class, 'noticias_categorias', 'noticia_id', 'categoria_id');
    }

    public function comentarios()
    {
        return $this->morphMany(Comentario::class, 'comentable');
    }

    public function getImagenUrlAttribute()
    {
        return asset('img/noticias/' . $this->imagen);
    }

}
