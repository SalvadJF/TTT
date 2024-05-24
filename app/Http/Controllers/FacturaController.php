<?php

namespace App\Http\Controllers;

use App\Models\Factura;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

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
        //
    }

    public function simularCompra(Request $request)
    {
        // Supongamos que recibes el ID del artículo y el precio de venta desde el cliente
        $articuloId = $request->input('articulo_id');
        $precioVenta = $request->input('precio_venta');

        // Crea una nueva factura en la base de datos
        Factura::create([
            'precio_venta' => $precioVenta,
            'user_id' => auth()->id(), // Opcional: si quieres registrar el usuario que realiza la compra
            'articulo_id' => $articuloId,
        ]);

        // Puedes devolver una respuesta JSON indicando el éxito de la operación
        return response()->json(['message' => 'Compra simulada con éxito']);
    }

}
