<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\ArticuloController;
use App\Http\Controllers\CategoriaController;
use App\Http\Controllers\ComentarioController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\EtiquetaController;
use App\Http\Controllers\NoticiaController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\FacturaController;
use App\Http\Controllers\PaypalController;
use App\Http\Controllers\UserController;
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


Route::get('/dashboard', function () {
    return app(DashboardController::class)->index();
})->middleware(['auth', 'bloqueado'])->name('dashboard');


Route::get('/bloqueado', function () {
    return Inertia::render('Bloqueado');
})->name('bloqueado');

Route::get('/borrado', function () {
    return Inertia::render('Borrado');
})->name('borrado');


Route::get('/nosotros', function () {
    return Inertia::render('Nosotros');
})->middleware(['auth', 'bloqueado'])->name('nosotros');

Route::get('/derechos', function () {
    return Inertia::render('Derechos');
})->middleware(['auth', 'bloqueado'])->name('derechos');

Route::middleware(['auth', 'verified', 'bloqueado'])->group(function () {
    Route::get('/articulos/create', [ArticuloController::class, 'create'])->name('articulos.create');
    Route::post('/articulos', [ArticuloController::class, 'store'])->name('articulos.store');
    Route::get('/articulos/{articulo}/edit', [ArticuloController::class, 'edit'])->name('articulos.edit');
    Route::put('/articulos/{articulo}', [ArticuloController::class, 'update'])->name('articulos.update');


Route::put('/noticias', [NoticiaController::class, 'store'])->name('noticias.store')->middleware('auth');
Route::put('/noticias/{noticia}', [NoticiaController::class, 'update'])->name('noticias.update')->middleware('auth');

Route::post('/comentarios', [ComentarioController::class, 'store'])->name('comentarios.store')->middleware('auth');

Route::resource('comentarios', ComentarioController::class);

Route::resource('articulos', ArticuloController::class);

Route::resource('noticias', NoticiaController::class);

Route::resource('profile', ProfileController::class);

Route::put('/categorias/{categoria}', [CategoriaController::class, 'update'])->name('categorias.update');
Route::put('/etiquetas/{etiqueta}', [EtiquetaController::class, 'update'])->name('etiquetas.update');

Route::post('/categorias', [CategoriaController::class, 'store'])->name('categorias.store');
Route::post('/etiquetas', [EtiquetaController::class, 'store'])->name('etiquetas.store');

Route::resource('categorias', CategoriaController::class);
Route::resource('etiquetas', EtiquetaController::class);

Route::get('/admin', [AdminController::class, 'index'])->name('admin.index');
Route::get('/admin/usuarios', [AdminController::class, 'usuarios'])->name('admin.usuarios');
Route::get('/admin/noticias', [AdminController::class, 'noticias'])->name('admin.noticias');
Route::get('/admin/articulos', [AdminController::class, 'articulos'])->name('admin.articulos');
Route::get('/admin/comentarios', [AdminController::class, 'comentarios'])->name('admin.comentarios');
Route::get('/admin/facturas', [AdminController::class, 'facturas'])->name('admin.facturas');
Route::get('/admin/otros', [AdminController::class, 'otros'])->name('admin.otros');



Route::post('/articulos/{articulo}/incrementarLikes', [ArticuloController::class, 'incrementarLikes'])->name('articulos.incrementarLikes');
Route::post('/articulos/{articulo}/decrementarLikes', [ArticuloController::class, 'decrementarLikes'])->name('articulos.decrementarLikes');
Route::post('/articulos/{articulo}/cambiarImagen', [ArticuloController::class, 'cambiarImagen'])->name('articulos.cambiarImagen');
Route::post('/articulos/{articulo}/cambiarModelo', [ArticuloController::class, 'cambiarModelo'])->name('articulos.cambiarModelo');
Route::post('/noticias/{noticia}/cambiarImagen', [NoticiaController::class, 'cambiarImagen'])->name('noticias.cambiarImagen');

// Rutas para bloquear y desbloquear usuarios
Route::post('/usuarios/blockUser/{id}', [UserController::class, 'blockUser'])->name('usuarios.blockUser');
Route::post('/usuarios/unBlockUser/{id}', [UserController::class, 'unBlockUser'])->name('usuarios.unBlockUser');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::post('/user/{usuario}/cambiardescripcion', [UserController::class, 'cambiarDescripcion'])->name('user.cambiardescripcion');
    Route::post('/user/{usuario}/cambiarcumple', [UserController::class, 'cambiarCumple'])->name('user.cambiarcumple');
    Route::post('/user/{usuario}/cambiaravatar', [UserController::class, 'cambiarAvatar'])->name('user.cambiaravatar');
});


Route::resource('usuarios', UserController::class)->middleware('auth');

Route::post('/simular-compra', [FacturaController::class, 'simularCompra'])->name('simularCompra');

Route::get('/facturas/{factura}/pdf', [FacturaController::class, 'descargarPdf'])->name('facturas.pdf');

Route::resource('facturas', FacturaController::class);

Route::post('/simular-compra-paypal', [FacturaController::class, 'simularCompraPaypal'])->name('simularCompraPaypal');
Route::get('/paypal-return', [FacturaController::class, 'paypalReturn'])->name('paypalReturn');
Route::get('/paypal-cancel', [FacturaController::class, 'paypalCancel'])->name('paypalCancel');

Route::post('/recargar-monedero', [FacturaController::class, 'recargarMonedero'])->name('recargarMonedero');
Route::get('/paypal-recarga-return', [FacturaController::class, 'paypalRecargaReturn'])->name('paypalRecargaReturn');
Route::get('/paypal-recarga-cancel', [FacturaController::class, 'paypalRecargaCancel'])->name('paypalRecargaCancel');

Route::get('/users-count', [UserController::class, 'getUserCount']);
Route::get('/articulos-count', [ArticuloController::class, 'getArticulosCount']);

});

require __DIR__.'/auth.php';
