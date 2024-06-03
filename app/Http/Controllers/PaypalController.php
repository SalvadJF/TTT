<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Factura;
use App\Models\User;

class PaypalController extends Controller
{
    public function paypal(Request $request)
    {
        // Lógica para iniciar el proceso de pago con PayPal
        // Puedes dejar este método como está o modificarlo según tus necesidades
    }

    public function success(Request $request)
    {
        // Lógica para manejar el éxito del pago con PayPal

        // Recibe los datos de la simulación de compra con PayPal
        $precioVenta = $request->input('precio_venta');
        $articuloId = $request->input('articulo_id');
        $userId = auth()->user()->id;

        // Simula la compra y crea la factura
        $user = User::findOrFail($userId);

        // Crear la factura
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
            'factura' => $factura
        ]);
    }

    public function cancel(Request $request)
    {
        // Lógica para manejar la cancelación del pago con PayPal
        return response()->json(['success' => false, 'message' => 'Pago cancelado']);
    }
}
