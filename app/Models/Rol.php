<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rol extends Model
{
    use HasFactory;

    public function usuarios()
    {
        return $this->belongsToMany(Usuario::class, 'usuarios_roles')->withPivot('activo');
    }
}
