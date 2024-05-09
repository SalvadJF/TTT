<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categoria extends Model
{
    use HasFactory;

    public function articulos()
    {
        return $this->belongsToMany(Articulo::class, 'articulos_categorias', 'categoria_id', 'articulo_id');
    }

    public function noticias()
    {
        return $this->belongsToMany(Noticia::class, 'noticias_categorias', 'categoria_id', 'noticia_id');
    }


}
