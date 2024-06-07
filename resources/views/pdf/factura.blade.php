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
            justify-content: center;
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
            max-width: 30%;
            display: block;
            margin: 0 auto 20px;
        }
        .header h1 {
            margin: 0;
            padding: 20px
            font-size: 70px;
            font-style: italic;
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
            text-align: center;
            margin: auto;
            padding: 3px
            font-size: 18px;
            color: #555555;
        }
        .thanks {
            text-align: center;
            font-size: 24px;
            margin-top: 20px;
        }
        .footer {
            text-align: center;
            bottom: 0%;
            margin-top: 50px;
            font-size: 16px;
            color: #777777;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <img src="{{ public_path('/img/iconos/logo.png') }}" alt="Imagen de la factura">
            <p class="thanks">¡Gracias por comprar en Trazos, Texturas y Tecnología 3D!</p>
            <h1>Albaran Nº {{ $factura->id }}</h1>
            <img src="{{ public_path($factura->articulo->imagen) }}" alt="Imagen de la factura">
        </div>
        <div class="details">
            <ul>
                <li><strong>Articulo:</strong> {{ $factura->articulo->nombre }}</li>
                <li><strong>Fecha de Emision:</strong> {{ \Carbon\Carbon::parse($factura->created_at)->format('d/m/Y') }}</li>
                <li><strong>Precio de Compra:</strong> {{ $factura->precio_venta }} €</li>
                <li><strong>Vendedor:</strong> {{ $factura->articulo->user->name }}</li>
                <li><strong>Comprador:</strong> {{ $factura->user->name }}</li>
            </ul>
        </div>
        <div class="footer">
            <p>Dirección: TTT.es</p>
            <p>Email: TTT@gmail.com</p>
        </div>
    </div>
</body>
</html>
