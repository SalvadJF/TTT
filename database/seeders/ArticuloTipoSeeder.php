<?php

namespace Database\Seeders;

use App\Models\Articulo_tipo;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ArticuloTipoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Articulo_tipo::factory()->count(10)->create();
    }
}
