<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Etiqueta extends Model
{
    use HasFactory;

    public function articulos()
    {
        return $this->belongsToMany(Articulo::class, 'articulos_etiquetas', 'etiqueta_id', 'articulo_id');
    }

    public function noticias()
    {
        return $this->belongsToMany(Noticia::class, 'noticias_etiquetas', 'etiqueta_id', 'noticia_id');
    }
}
