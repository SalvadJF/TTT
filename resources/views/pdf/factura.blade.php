<!DOCTYPE html>
<html>
<head>
    <title>Albaran Nº {{ $factura->id }}</title>
    <style>
        body {
            font-family: Koulen;
            background-color: #f4f4f9;
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
            text-align: center;
            margin-bottom: 20px;
        }
        .header img {
            max-width: 150px;
            margin-bottom: 10px;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
            color: #333333;
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
            font-size: 18px;
            color: #555555;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Albaran Nº {{ $factura->id }}</h1>
        </div>
        <div class="details">
            <ul>
                <li><strong>Numero de Albaran:</strong> {{ $factura->id }}</li>
                <li><strong>Fecha de Emision:</strong> {{ \Carbon\Carbon::parse($factura->created_at)->format('d/m/Y') }}</li>
                <li><strong>Precio de Compra:</strong> {{ $factura->precio_venta }} €</li>
                <li><strong>Vendedor:</strong> {{ $factura->articulo->user->name }}</li>
                <li><strong>Comprador:</strong> {{ $factura->user->name }}</li>
            </ul>
        </div>
    </div>
</body>
</html>
