<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Imagen extends Model
{
    use HasFactory;

    public function usuario()
    {
        return $this->belongsTo(User::class);
    }

    public function articulos()
    {
        return $this->morphToMany(Articulo::class, 'mostrar');
    }

    public function noticias()
    {
        return $this->morphToMany(Noticia::class, 'mostrar');
    }
}
