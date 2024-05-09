<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('articulos_imagenes', function (Blueprint $table) {
            $table->id();
            $table->foreignId('imagen_id')->constrained('imagenes');
            $table->foreignId('articulo_id')->constrained('articulos');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('articulos_imagenes');
    }
};
