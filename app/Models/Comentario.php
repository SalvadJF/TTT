<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comentario extends Model
{
    use HasFactory;

    public function usuario()
    {
        return $this->belongsTo(User::class);
    }

    public function origen()
    {
        return $this->morphTo();
    }

    public function comentarios()
    {
        return $this->morphMany(Comentario::class, 'origen');
    }

    public function objetivos_contadores()
    {
        return $this->morphMany(Objetivo_Contador::class, 'objetivo');
    }
}
