<?php

namespace Database\Seeders;

use App\Models\Noticia;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Crear el usuarios fijos

        User::create([
            'name' => 'admin',
            'email' => 'admin@admin.es',
            'email_verified_at' => now(),
            'password' => Hash::make('1234werty'),
            'admin' => 'true',
            'monedero' => '5000',
            'remember_token' => Str::random(10),
            'avatar' => '/img/users/admin.png'
        ]);


        User::create([
            'name' => 'salva',
            'email' => 'salva@salva.es',
            'email_verified_at' => now(),
            'password' => Hash::make('1234werty'),
            'admin' => 'false',
            'monedero' => '5000',
            'remember_token' => Str::random(10),
            'avatar' => '/img/users/salva.png'
        ]);

        // Crear usuarios aleatorios
        User::factory(10)->create();

        $this->call([

            CategoriaSeeder::class,
            EtiquetaSeeder::class,
            ArticuloSeeder::class,
            NoticiaSeeder::class,
            // ComentarioSeeder::class,
            ContadorSeeder::class,

        ]);
    }
}
