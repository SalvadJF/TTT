<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contador extends Model
{
    use HasFactory;

    protected $table = "contadores";

    protected $fillable = ['nombre', 'cantidad'];

    public function objetivo()
    {
        return $this->morphTo();
    }

}
