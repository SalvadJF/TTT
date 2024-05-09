<?php

namespace Database\Seeders;

use App\Models\Objetivo_Contador;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ObjetivoContadorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Objetivo_Contador::factory()->count(10)->create();
    }
}
