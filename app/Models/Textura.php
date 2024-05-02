<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Textura extends Model
{
    use HasFactory;

    public function articulos_tipos()
    {
        return $this->morphMany(Articulo_tipo::class, 'tipo');
    }
}
