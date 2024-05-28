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
        Etiqueta::create(['nombre' => 'Figuras']);
        Etiqueta::create(['nombre' => 'Por Piezas']);
        Etiqueta::create(['nombre' => 'Naturaleza']);
        Etiqueta::create(['nombre' => 'Cotidiano']);
    }
}
