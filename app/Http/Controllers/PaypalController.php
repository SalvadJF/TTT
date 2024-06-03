<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Factura;
use App\Models\User;

class PaypalController extends Controller
{
    public function paypal(Request $request)
    {

        // Configuración de PayPal

        $clientId = 'AXxUfKk1G3Jr3SIJMlGeLoa_bm3pBUq7Y2aBpA-bs-5UufBU2kpLFwpihiMkEX8AuSEZjpHnraYn61dH';

        $secret = 'EM-h2tK7Q85skYdyyzkY5Jtk6ndmZBrEGAHwt5sqCm3juPM3xhBPzZ3f_OvsgX715ef_r1RcX_d7bVg5';

        $apiContext = new \PayPal\Rest\ApiContext(new \PayPal\Auth\OAuthTokenCredential($clientId, $secret));


        // Crear un pedido

        $payer = new \PayPal\Api\Payer();

        $payer->setPaymentMethod('paypal');


        $amount = new \PayPal\Api\Amount();

        $amount->setCurrency('USD');

        $amount->setTotal($request->input('precio_venta'));


        $transaction = new \PayPal\Api\Transaction();

        $transaction->setAmount($amount);

        $transaction->setDescription('Pago de artículo');


        $redirectUrls = new \PayPal\Api\RedirectUrls();

        $redirectUrls->setReturnUrl(route('paypal.success'));

        $redirectUrls->setCancelUrl(route('paypal.cancel'));


        $payment = new \PayPal\Api\Payment();

        $payment->setIntent('sale');

        $payment->setPayer($payer);

        $payment->setTransactions(array($transaction));

        $payment->setRedirectUrls($redirectUrls);


        try {

            $payment->create($apiContext);

        } catch (\PayPal\Exception\PayPalConnectionException $ex) {

            // Manejar el error

        }


        // Redirigir al usuario a la página de pago de PayPal

        return redirect($payment->getApprovalLink());

    }
    public function success(Request $request)
    {
        try {
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

            // Guardar la factura en la base de datos
            $factura->save();

            // Cargar la factura con sus relaciones
            $factura->load(['user', 'articulo']);

            return response()->json([
                'success' => true,
                'message' => 'Compra realizada con éxito',
                'factura' => $factura
            ]);
        } catch (\Exception $e) {
            // Manejar el error
            return response()->json([
                'success' => false,
                'message' => 'Error al procesar la compra: '. $e->getMessage()
            ], 500);
        }
    }

    public function cancel(Request $request)
    {
        // Lógica para manejar la cancelación del pago con PayPal
        return response()->json(['success' => false, 'message' => 'Pago cancelado']);
    }
}
