<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Factura extends Model
{
    use HasFactory;

    public function usuario()
    {
        return $this->belongsTo(User::class);
    }

    public function articulos()
    {
        return $this->belongsToMany(Articulo::class, 'articulos_facturas', 'factura_id', 'articulo_id');
    }
}
