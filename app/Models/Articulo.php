<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Articulo extends Model
{
    use HasFactory;

    protected $table = "articulos";

    protected $fillable = [
        'nombre',
        'descripcion',
        'tipo',
        'imagen',
        'modelo',
        'precio',
        'user_id'
    ];

    const MIME_IMAGEN = 'png, jpg, jpeg, webp';
    const MIME_MODELO = 'stl';

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function comentarios()
    {
        return $this->morphMany(Comentario::class, 'comentable');
    }

    public function contadores()
    {
        return $this->morphMany(Contador::class, 'objetivo');
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
        return $this->HasMany(Factura::class);
    }

    public function getImagenUrlAttribute()
    {
        return asset('img/articulos/' . $this->imagen);
    }

    public function getModeloUrlAttribute()
    {
        return asset('img/modelos/' . $this->modelo);
    }
}
