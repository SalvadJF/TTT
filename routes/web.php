<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\ArticuloController;
use App\Http\Controllers\ComentarioController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\NoticiaController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\FacturaController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Http\Middleware\HandlePrecognitiveRequests;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    // Verificar si el usuario está bloqueado
    if (auth()->check() && auth()->user()->blocked) {
        return redirect()->route('bloqueado');
    }

    // Si el usuario no está bloqueado, renderizar la vista 'Welcome'
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    // Verificar si el usuario está bloqueado
    if (auth()->check() && auth()->user()->blocked) {
        return redirect()->route('bloqueado');
    }

    return app(DashboardController::class)->index();
})->middleware(['auth'])->name('dashboard');


Route::get('/bloqueado', function () {
    return Inertia::render('Bloqueado');
})->name('bloqueado');


Route::get('/nosotros', function () {
    return Inertia::render('Nosotros');
})->middleware(['auth', 'verified'])->name('nosotros');

Route::get('/derechos', function () {
    return Inertia::render('Derechos');
})->middleware(['auth', 'verified'])->name('derechos');

Route::middleware('auth')->group(function () {
    Route::get('/articulos/create', [ArticuloController::class, 'create'])->name('articulos.create');
    Route::post('/articulos', [ArticuloController::class, 'store'])->name('articulos.store');
    Route::get('/articulos/{articulo}/edit', [ArticuloController::class, 'edit'])->name('articulos.edit');
    Route::put('/articulos/{articulo}', [ArticuloController::class, 'update'])->name('articulos.update');
});

Route::put('/noticias', [NoticiaController::class, 'store'])->name('noticias.store')->middleware('auth');
Route::put('/noticias/{noticia}', [NoticiaController::class, 'update'])->name('noticias.update')->middleware('auth');

Route::post('/comentarios', [ComentarioController::class, 'store'])->name('comentarios.store')->middleware('auth');

Route::resource('comentarios', ComentarioController::class);

Route::resource('articulos', ArticuloController::class);

Route::resource('noticias', NoticiaController::class);

Route::resource('profile', ProfileController::class);



Route::get('/admin', [AdminController::class, 'index'])->name('admin.index');
Route::get('/admin/usuarios', [AdminController::class, 'usuarios'])->name('admin.usuarios');
Route::get('/admin/noticias', [AdminController::class, 'noticias'])->name('admin.noticias');
Route::get('/admin/articulos', [AdminController::class, 'articulos'])->name('admin.articulos');
Route::get('/admin/comentarios', [AdminController::class, 'comentarios'])->name('admin.comentarios');
Route::get('/admin/facturas', [AdminController::class, 'facturas'])->name('admin.facturas');

// Rutas para bloquear y desbloquear usuarios
Route::post('/admin/blockUser/{id}', [AdminController::class, 'blockUser'])->name('admin.blockUser');
Route::post('/admin/unBlockUser/{id}', [AdminController::class, 'unBlockUser'])->name('admin.unBlockUser');

Route::post('/articulos/{articulo}/incrementarLikes', [ArticuloController::class, 'incrementarLikes'])->name('articulos.incrementarLikes');
Route::post('/articulos/{articulo}/decrementarLikes', [ArticuloController::class, 'decrementarLikes'])->name('articulos.decrementarLikes');
Route::post('/articulos/{articulo}/cambiarImagen', [ArticuloController::class, 'cambiarImagen'])->name('articulos.cambiarImagen');
Route::post('/articulos/{articulo}/cambiarModelo', [ArticuloController::class, 'cambiarModelo'])->name('articulos.cambiarModelo');

Route::resource('usuarios', UserController::class)->middleware('auth');

Route::post('/simular-compra', [FacturaController::class, 'simularCompra'])->name('simularCompra');

Route::get('/facturas/{factura}/pdf', [FacturaController::class, 'descargarPdf'])->name('facturas.pdf');

Route::resource('facturas', FacturaController::class);


require __DIR__.'/auth.php';
