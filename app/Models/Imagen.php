<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Imagen extends Model
{
    use HasFactory;

    protected $table = "imagenes";

    public function usuario()
    {
        return $this->belongsTo(User::class);
    }

    public function articulos()
    {
        return $this->belongsToMany(Articulo::class, 'articulos_imagenes', 'imagen_id', 'articulo_id');
    }

    public function noticias()
    {
        return $this->belongsToMany(Articulo::class, 'noticias_imagenes', 'imagen_id', 'noticia_id');
    }

}
