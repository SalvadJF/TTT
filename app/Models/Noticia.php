<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Noticia extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $table = "noticias";

    protected $fillable = [
        'titulo',
        'resumen',
        'contenido',
        'tipo',
        'imagen',
        'user_id'
    ];

    const MIME_IMAGEN = 'png, jpg, jpeg, webp';

    public function usuario()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function objetivos_contadores()
    {
        return $this->morphMany(Contador::class, 'objetivo');
    }

    public function etiquetas()
    {
        return $this->belongsToMany(Etiqueta::class, 'noticias_etiquetas', 'noticia_id', 'etiqueta_id');
    }

    public function comentarios()
    {
        return $this->morphMany(Comentario::class, 'comentable');
    }

    public function getImagenUrlAttribute()
    {
        return asset('img/noticias/' . $this->imagen);
    }

}
