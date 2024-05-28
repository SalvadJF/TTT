<?php

namespace Database\Seeders;

use App\Models\Categoria;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategoriaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Categoria::create(['nombre' => 'Videojuegos']);
        Categoria::create(['nombre' => 'Prototipos']);
        Categoria::create(['nombre' => 'Ensamblaje']);
        Categoria::create(['nombre' => 'Fantasia']);
    }
}
