<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'avatar',
        'monedero',
        'admin'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function articulos()
    {
        return $this->hasMany(Articulo::class);
    }

    public function noticias()
    {
        return $this->hasMany(Noticia::class);
    }

    public function facturas()
    {
        return $this->hasMany(Factura::class);
    }

    public function comentarios()
    {
        return $this->hasMany(Comentario::class);
    }

    public function comentable()
    {
        return $this->morphMany(Comentario::class, 'comentable');
    }

    public function getAvatarUrlAttribute()
    {
        return asset('img/users/' . $this->avatar);
    }

    public function isAdmin()
    {
        return $this->admin;
    }


}
