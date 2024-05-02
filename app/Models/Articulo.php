<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Articulo extends Model
{
    use HasFactory;

    public function usuario()
    {
        return $this->belongsTo(User::class);
    }

    public function articulos_tipos()
    {
        return $this->hasMany(Articulo_tipo::class);
    }

    public function comentarios()
    {
        return $this->morphMany(Comentario::class, 'origen');
    }

    public function objetivos_contadores()
    {
        return $this->morphMany(Objetivo_Contador::class, 'objetivo');
    }

    public function etiquetas()
    {
        return $this->belongsToMany(Etiqueta::class, 'articulos_etiquetas', 'articulo_id', 'etiqueta_id');
    }

    public function categorias()
    {
        return $this->belongsToMany(Categoria::class, 'articulos_categorias', 'articulo_id', 'categoria_id');
    }

    public function facturas()
    {
        return $this->belongsToMany(Factura::class, 'articulos_facturas', 'factura_id', 'articulo_id');
    }
}
