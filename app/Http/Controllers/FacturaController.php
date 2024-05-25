<?php

namespace App\Http\Controllers;

use App\Models\Factura;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FacturaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Factura $factura)
    {
        $factura->load(['user', 'articulo']);

    // Renderiza la vista con los datos de la factura y sus relaciones
    return Inertia::render('Facturas/Show', [
        'factura' => $factura,
    ]);
    }

    public function simularCompra(Request $request)
    {
        // Simulación de la compra
        $precioVenta = $request->input('precio_venta');
        $articuloId = $request->input('articulo_id');
        $userId = auth()->user()->id;

        // Simula la compra y crea la factura
        $user = User::findOrFail($userId);

        // Verifica si el usuario tiene suficiente dinero en su monedero
        if ($user->monedero >= $precioVenta) {
            // Realiza la compra y actualiza el monedero del usuario
            $user->monedero -= $precioVenta;
            $user->save();

            // Crea la factura
            $factura = new Factura();
            $factura->precio_venta = $precioVenta;
            $factura->user_id = $userId;
            $factura->articulo_id = $articuloId;
            $factura->save();

            // Cargar la factura con sus relaciones
            $factura->load(['user', 'articulo']);

            return response()->json([
                'success' => true,
                'message' => 'Compra realizada con éxito',
                'factura' => $factura // Enviamos el objeto completo de la factura
            ]);
        } else {
            return response()->json(['success' => false, 'message' => 'Saldo insuficiente en el monedero']);
        }
    }



}
