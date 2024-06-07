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

        User::create([
            'name' => 'dana',
            'email' => 'dana@dana.es',
            'email_verified_at' => now(),
            'password' => Hash::make('1234werty'),
            'admin' => 'false',
            'monedero' => '100',
            'remember_token' => Str::random(10),
            'avatar' => '/img/users/dana.png'
        ]);

        User::create([
            'name' => 'villa',
            'email' => 'villa@villa.es',
            'email_verified_at' => now(),
            'password' => Hash::make('1234werty'),
            'admin' => 'false',
            'monedero' => '200',
            'remember_token' => Str::random(10),
            'avatar' => '/img/users/villa.png'
        ]);

        User::create([
            'name' => 'josua',
            'email' => 'josua@josua.es',
            'email_verified_at' => now(),
            'password' => Hash::make('1234werty'),
            'admin' => 'false',
            'monedero' => '0',
            'remember_token' => Str::random(10),
            'avatar' => '/img/users/josua.png'
        ]);

        User::create([
            'name' => 'many',
            'email' => 'many@many.es',
            'email_verified_at' => now(),
            'password' => Hash::make('1234werty'),
            'admin' => 'false',
            'monedero' => '500',
            'remember_token' => Str::random(10),
            'avatar' => '/img/users/many.png'
        ]);

        User::create([
            'name' => 'ale',
            'email' => 'ale@ale.es',
            'email_verified_at' => now(),
            'password' => Hash::make('1234werty'),
            'admin' => 'false',
            'monedero' => '5000',
            'remember_token' => Str::random(10),
            'avatar' => '/img/users/ale.png'
        ]);

        User::create([
            'name' => 'pedro',
            'email' => 'pedro@pedro.es',
            'email_verified_at' => now(),
            'password' => Hash::make('1234werty'),
            'admin' => 'false',
            'monedero' => '5000',
            'remember_token' => Str::random(10),
            'avatar' => '/img/users/pedro.png'
        ]);

        User::create([
            'name' => 'nacho',
            'email' => 'nacho@nacho.es',
            'email_verified_at' => now(),
            'password' => Hash::make('1234werty'),
            'admin' => 'false',
            'monedero' => '5000',
            'remember_token' => Str::random(10),
            'avatar' => '/img/users/nacho.png'
        ]);

        // Crear usuarios aleatorios
        User::factory(2)->create();

        $this->call([

            CategoriaSeeder::class,
            EtiquetaSeeder::class,
            ArticuloSeeder::class,
            NoticiaSeeder::class,
            ComentarioSeeder::class,
            ContadorSeeder::class,

        ]);
    }
}
