<?php

use App\Http\Controllers\ArticuloController;
use App\Http\Controllers\ComentarioController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\NoticiaController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Http\Middleware\HandlePrecognitiveRequests;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', [DashboardController::class, 'index'])
->middleware(['auth'])
->name('dashboard');

Route::get('/nosotros', function () {
    return Inertia::render('Nosotros');
})->middleware(['auth', 'verified'])->name('nosotros');

Route::get('/modelo', function () {
    return Inertia::render('Modelo');
});


Route::middleware('auth')->group(function () {
    Route::get('/articulos/create', [ArticuloController::class, 'create'])->name('articulos.create');
    Route::post('/articulos', [ArticuloController::class, 'store'])->name('articulos.store');
    Route::get('/articulos/{articulo}/edit', [ArticuloController::class, 'edit'])->name('articulos.edit');
    Route::put('/articulos/{articulo}', [ArticuloController::class, 'update'])->name('articulos.update');
});

Route::put('/noticias', [NoticiaController::class, 'store'])->name('noticias.store')->middleware('auth');
Route::put('/noticias/{noticia}', [NoticiaController::class, 'update'])->name('noticias.update')->middleware('auth');

Route::post('/comentarios', [ComentarioController::class, 'store'])->name('comentarios.store')->middleware('auth');

Route::resource('articulos', ArticuloController::class);

Route::resource('noticias', NoticiaController::class);

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});



require __DIR__.'/auth.php';
