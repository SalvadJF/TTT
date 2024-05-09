<?php

namespace Database\Seeders;

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
        // Crear el usuario fijo
        User::create([
            'name' => 'Salva',
            'email' => 'salva@salva.es',
            'email_verified_at' => now(),
            'password' => Hash::make('1234werty'),
            'remember_token' => Str::random(10),
        ]);

        // Crear usuarios aleatorios
        User::factory(10)->create();

        $this->call([
            ModeloSeeder::class,
            TexturaSeeder::class,
            CategoriaSeeder::class,
            EtiquetaSeeder::class,
            ArticuloSeeder::class,
            NoticiaSeeder::class,
            ComentarioSeeder::class,
            // RolSeeder::class,
            FacturaSeeder::class,
            // ObjetivoContadorSeeder::class,
            ArticuloSeeder::class,
            // ContadorSeeder::class,
            ImagenSeeder::class,

        ]);
    }
}
