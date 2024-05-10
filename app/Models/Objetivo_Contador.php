<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Objetivo_Contador extends Model
{
    use HasFactory;

    protected $table = "objetivo_contadores";

    public function objetivo()
    {
        return $this->morphTo();
    }

    public function contador()
    {
        return $this->belongsTo(Contador::class);
    }
}
