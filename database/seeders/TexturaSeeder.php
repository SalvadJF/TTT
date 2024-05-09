<?php

namespace Database\Seeders;

use App\Models\Textura;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TexturaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Textura::factory()->count(10)->create();
    }
}
