<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        $this->call([
            ArticuloSeeder::class,
            NoticiaSeeder::class,
            ComentarioSeeder::class,
            CategoriaSeeder::class,
            // EtiquetaSeeder::class,
            // RolSeeder::class,
            FacturaSeeder::class,
            // ObjetivoContadorSeeder::class,
            ArticuloSeeder::class,
            // ContadorSeeder::class,
            ModeloSeeder::class,
            TexturaSeeder::class,

        ]);
    }
}
