<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Contador extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $table = "contadores";

    protected $fillable = ['nombre', 'cantidad'];

    public function objetivo()
    {
        return $this->morphTo();
    }

}
