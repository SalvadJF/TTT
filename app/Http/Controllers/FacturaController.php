<?php

namespace App\Http\Controllers;

use App\Models\Factura;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Barryvdh\DomPDF\Facade\Pdf;
use Srmklive\PayPal\Services\PayPal as PayPalClient;

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
        $factura->load(['user', 'articulo.user']);

    // Renderiza la vista con los datos de la factura y sus relaciones
    return Inertia::render('Facturas/Show', [
        'factura' => $factura,
    ]);
    }

    public function destroy(Factura $factura)

    {
        // Verificar si el usuario autenticado es el creador de la noticia o es administrador
        if (auth()->id() !== $factura->user_id && !auth()->user()->isAdmin()) {
            abort(403); // No autorizado
        }

        $factura->delete();

       return;

    }

    public function descargarPdf(Factura $factura)
    {
        $factura->load(['user', 'articulo.user']);

        $pdf = Pdf::loadView('pdf.factura', compact('factura'));
        return $pdf->download('factura.pdf');
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
                'factura' => $factura
            ]);
        } else {
            return response()->json(['success' => false, 'message' => 'Saldo insuficiente en el monedero']);
        }
    }

    public function simularCompraPaypal(Request $request)
{
    $provider = new PayPalClient;
    $provider->setApiCredentials(config('paypal'));
    $provider->getAccessToken();

    session()->put('articulo_id', $request->input('articulo_id'));
    session()->put('precio_venta', $request->input('precio_venta'));

    $response = $provider->createOrder([
        "intent" => "CAPTURE",
        "application_context" => [
            "return_url" => route('paypalReturn'),
            "cancel_url" => route('paypalCancel')
        ],
        "purchase_units" => [
            [
                "amount" => [
                    "currency_code" => "EUR",
                    "value" => $request->input('precio_venta')
                ],
                "description" => "Compra del artículo ID: " . $request->input('articulo_id')
            ]
        ]
    ]);

    if (isset($response['id']) && $response['id'] != null) {
        return response()->json([
            'success' => true,
            'redirect_url' => collect($response['links'])->firstWhere('rel', 'approve')['href']
        ]);
    } else {
        return response()->json(['success' => false, 'message' => 'Error al crear el pedido con PayPal']);
    }
}

public function paypalReturn(Request $request)
{
    $provider = new PayPalClient;
    $provider->setApiCredentials(config('paypal'));
    $provider->getAccessToken();
    $response = $provider->capturePaymentOrder($request->input('token'));

    if (isset($response['status']) && $response['status'] == 'COMPLETED') {
        $articuloId = session()->pull('articulo_id');
    $precioVenta = session()->pull('precio_venta');
        $userId = auth()->user()->id;

        // Crea la factura
        $factura = new Factura();
        $factura->precio_venta = $precioVenta;
        $factura->user_id = $userId;
        $factura->articulo_id = $articuloId;
        $factura->save();

        return redirect()->route('facturas.show', ['factura' => $factura->id])->with('success', 'Compra realizada con éxito');
    } else {
        return redirect()->route('dashboard')->with('error', 'Error en la compra con PayPal');
    }
}

public function paypalCancel()
{
    return redirect()->route('dashboard')->with('error', 'Compra cancelada');
}

public function recargarMonedero(Request $request)
{
    $provider = new PayPalClient;
    $provider->setApiCredentials(config('paypal'));
    $provider->getAccessToken();

    session()->put('recarga_monto', $request->input('monto'));

    $response = $provider->createOrder([
        "intent" => "CAPTURE",
        "application_context" => [
            "return_url" => route('paypalRecargaReturn'),
            "cancel_url" => route('paypalRecargaCancel')
        ],
        "purchase_units" => [
            [
                "amount" => [
                    "currency_code" => "EUR",
                    "value" => $request->input('monto')
                ],
                "description" => "Recarga de monedero"
            ]
        ]
    ]);

    if (isset($response['id']) && $response['id'] != null) {
        return response()->json([
            'success' => true,
            'redirect_url' => collect($response['links'])->firstWhere('rel', 'approve')['href']
        ]);
    } else {
        return response()->json(['success' => false, 'message' => 'Error al crear el pedido con PayPal']);
    }
}

public function paypalRecargaReturn(Request $request)
{
    $provider = new PayPalClient;
    $provider->setApiCredentials(config('paypal'));
    $provider->getAccessToken();
    $response = $provider->capturePaymentOrder($request->input('token'));

    if (isset($response['status']) && $response['status'] == 'COMPLETED') {
        $monto = session()->pull('recarga_monto');
        $user = auth()->user();

        // Recargar el monedero del usuario
        $user->monedero += $monto;
        $user->save();

        return redirect()->route('profile.index')->with('success', 'Recarga de monedero realizada con éxito');
    } else {
        return redirect()->route('profile.index')->with('error', 'Error en la recarga de monedero con PayPal');
    }
}

public function paypalRecargaCancel()
{
    return redirect()->route('profile.index')->with('error', 'Recarga cancelada');
}




}
