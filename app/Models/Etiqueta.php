<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Etiqueta extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $table = "etiquetas";

    protected $fillable = [
        'nombre',
    ];

    public function articulos()
    {
        return $this->belongsToMany(Articulo::class, 'articulos_etiquetas', 'etiqueta_id', 'articulo_id');
    }

    public function noticias()
    {
        return $this->belongsToMany(Noticia::class, 'noticias_etiquetas', 'etiqueta_id', 'noticia_id');
    }

}
