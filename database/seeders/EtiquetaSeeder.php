<?php

namespace Database\Seeders;

use App\Models\Etiqueta;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EtiquetaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Etiqueta::create(['nombre' => '3D']);
        Etiqueta::create(['nombre' => 'Avanzado']);
        Etiqueta::create(['nombre' => 'Dificil']);
    }
}
