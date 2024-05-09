<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Noticia extends Model
{
    use HasFactory;

    public function usuario()
    {
        return $this->belongsTo(User::class);
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

    public function imagenes()
    {
        return $this->belongsToMany(Noticia::class, 'noticias_imagenes', 'noticia_id', 'imagen_id');
    }
}
