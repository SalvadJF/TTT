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
        Schema::create('noticias_imagenes', function (Blueprint $table) {
            $table->id();
            $table->foreignId('imagen_id')->constrained('imagenes');
            $table->foreignId('noticia_id')->constrained('noticias');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('mostrar_imagenes');
    }
};
