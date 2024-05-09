<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contador extends Model
{
    use HasFactory;

    protected $table = "contadores";

    public function objetivos()
    {
        return $this->hasMany(Objetivo_Contador::class);
    }

}