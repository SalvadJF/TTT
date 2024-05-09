<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ArticuloController;
use App\Http\Controllers\NoticiaController;
use App\Models\Articulo;
use App\Models\Noticia;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/home', function () {
    $ultimosArticulos = Articulo::latest()->take(4)->get();
    $ultimasNoticias = Noticia::latest()->take(4)->get();

    return view('home', compact('ultimosArticulos', 'ultimasNoticias'));
})->middleware(['auth', 'verified'])->name('home');

Route::get('/nosotros', function () {
    return view('nosotros');
})->middleware(['auth', 'verified'])->name('nosotros');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::resource('articulos', ArticuloController::class)->middleware('auth');

Route::resource('noticias', NoticiaController::class)->middleware('auth');

require __DIR__.'/auth.php';
