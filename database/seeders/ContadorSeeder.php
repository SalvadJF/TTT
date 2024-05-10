<?php

namespace Database\Seeders;

use App\Models\Contador;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ContadorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Crear un contador para Likes
        Contador::create(['nombre' => 'Likes']);

        // Crear un contador para Visitas
        Contador::create(['nombre' => 'Visitas']);
    }
}
