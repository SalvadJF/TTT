<?php

namespace Database\Seeders;

use App\Models\Objetivo_Contador;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class Objetivo_ContadorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
         // Llama a la factoría para crear registros en la tabla objetivo_contadores
         Objetivo_Contador::factory()->count(Objetivo_Contador::all()->count())->create();
    }
}
