<!DOCTYPE html>
<html>
<head>
    <title>Factura Nº {{ $factura->id }}</title>
    <style>
        body {
            font-family: DejaVu Sans, sans-serif;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
        }
        .header {
            text-align: center;
            margin-bottom: 20px;
        }
        .header h1 {
            margin: 0;
        }
        .details {
            margin-bottom: 20px;
        }
        .details ul {
            list-style: none;
            padding: 0;
        }
        .details ul li {
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Factura Nº {{ $factura->id }}</h1>
        </div>
        <div class="details">
            <ul>
                <li>Numero de Factura: {{ $factura->id }}</li>
                <li>Fecha de Emision: {{ \Carbon\Carbon::parse($factura->created_at)->format('d/m/Y') }}</li>
                <li>Precio de Compra: {{ $factura->precio_venta }} €</li>
                <li>Vendedor: {{ $factura->articulo->user->name }}</li>
                <li>Comprador: {{ $factura->user->name }}</li>
            </ul>
        </div>
    </div>
</body>
</html>
