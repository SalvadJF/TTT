<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Articulo_tipo extends Model
{
    use HasFactory;

    public function tipo()
    {
        return $this->morphTo();
    }

    public function articulo()
    {
        return $this->belongsTo(Articulo::class);
    }
}
