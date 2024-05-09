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
        Contador::factory()->count(10)->create();
    }
}
