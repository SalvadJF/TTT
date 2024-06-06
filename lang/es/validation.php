<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Líneas de idioma de validación
    |--------------------------------------------------------------------------
    |
    | Las siguientes líneas de idioma contienen los mensajes de error predeterminados utilizados por
    | la clase del validador. Algunas de estas reglas tienen varias versiones, como
    | las reglas de tamaño. Siéntete libre de ajustar cada uno de estos mensajes aquí.
    |
    */

    'accepted' => 'El campo :attribute debe ser aceptado.',
    'accepted_if' => 'El campo :attribute debe ser aceptado cuando :other es :value.',
    'active_url' => 'El campo :attribute no es una URL válida.',
    'after' => 'El campo :attribute debe ser una fecha posterior a :date.',
    'after_or_equal' => 'El campo :attribute debe ser una fecha posterior o igual a :date.',
    'alpha' => 'El campo :attribute solo puede contener letras.',
    'alpha_dash' => 'El campo :attribute solo puede contener letras, números, guiones y guiones bajos.',
    'alpha_num' => 'El campo :attribute solo puede contener letras y números.',
    'array' => 'El campo :attribute debe ser un conjunto.',
    'ascii' => 'El campo :attribute solo puede contener caracteres alfanuméricos de un solo byte y símbolos.',
    'before' => 'El campo :attribute debe ser una fecha anterior a :date.',
    'before_or_equal' => 'El campo :attribute debe ser una fecha anterior o igual a :date.',
    'between' => [
        'array' => 'El campo :attribute debe tener entre :min y :max elementos.',
        'file' => 'El campo :attribute debe tener entre :min y :max kilobytes.',
        'numeric' => 'El campo :attribute debe estar entre :min y :max.',
        'string' => 'El campo :attribute debe tener entre :min y :max caracteres.',
    ],
    'boolean' => 'El campo :attribute debe ser verdadero o falso.',
    'can' => 'El campo :attribute contiene un valor no autorizado.',
    'confirmed' => 'La confirmación del campo :attribute no coincide.',
    'current_password' => 'La contraseña es incorrecta.',
    'date' => 'El campo :attribute no es una fecha válida.',
    'date_equals' => 'El campo :attribute debe ser una fecha igual a :date.',
    'date_format' => 'El campo :attribute no coincide con el formato :format.',
    'decimal' => 'El campo :attribute debe tener :decimal decimales.',
    'declined' => 'El campo :attribute debe ser declinado.',
    'declined_if' => 'El campo :attribute debe ser declinado cuando :other es :value.',
    'different' => 'Los campos :attribute y :other deben ser diferentes.',
    'digits' => 'El campo :attribute debe tener :digits dígitos.',
    'digits_between' => 'El campo :attribute debe tener entre :min y :max dígitos.',
    'dimensions' => 'El campo :attribute tiene dimensiones de imagen no válidas.',
    'distinct' => 'El campo :attribute tiene un valor duplicado.',
    'doesnt_end_with' => 'El campo :attribute no debe terminar con ninguno de los siguientes: :values.',
    'doesnt_start_with' => 'El campo :attribute no debe comenzar con ninguno de los siguientes: :values.',
    'email' => 'El campo :attribute debe ser una dirección de correo electrónico válida.',
    'ends_with' => 'El campo :attribute debe terminar con uno de los siguientes: :values.',
    'enum' => 'El :attribute seleccionado es inválido.',
    'exists' => 'El :attribute seleccionado es inválido.',
    'extensions' => 'El campo :attribute debe tener una de las siguientes extensiones: :values.',
    'file' => 'El campo :attribute debe ser un archivo.',
    'filled' => 'El campo :attribute debe tener un valor.',
    'gt' => [
        'array' => 'El campo :attribute debe tener más de :value elementos.',
        'file' => 'El campo :attribute debe ser mayor que :value kilobytes.',
        'numeric' => 'El campo :attribute debe ser mayor que :value.',
        'string' => 'El campo :attribute debe ser mayor que :value caracteres.',
    ],
    'gte' => [
        'array' => 'El campo :attribute debe tener :value elementos o más.',
        'file' => 'El campo :attribute debe ser mayor o igual que :value kilobytes.',
        'numeric' => 'El campo :attribute debe ser mayor o igual que :value.',
        'string' => 'El campo :attribute debe ser mayor o igual que :value caracteres.',
    ],
    'hex_color' => 'El campo :attribute debe ser un color hexadecimal válido.',
    'image' => 'El campo :attribute debe ser una imagen.',
    'in' => 'El :attribute seleccionado es inválido.',
    'in_array' => 'El campo :attribute no existe en :other.',
    'integer' => 'El campo :attribute debe ser un número entero.',
    'ip' => 'El campo :attribute debe ser una dirección IP válida.',
    'ipv4' => 'El campo :attribute debe ser una dirección IPv4 válida.',
    'ipv6' => 'El campo :attribute debe ser una dirección IPv6 válida.',
    'json' => 'El campo :attribute debe ser una cadena JSON válida.',
    'list' => 'El campo :attribute debe ser una lista.',
    'lowercase' => 'El campo :attribute debe estar en minúsculas.',
    'lt' => [
        'array' => 'El campo :attribute debe tener menos de :value elementos.',
        'file' => 'El campo :attribute debe ser menor que :value kilobytes.',
        'numeric' => 'El campo :attribute debe ser menor que :value.',
        'string' => 'El campo :attribute debe ser menor que :value caracteres.',
    ],
    'lte' => [
        'array' => 'El campo :attribute no debe tener más de :value elementos.',
        'file' => 'El campo :attribute debe ser menor o igual que :value kilobytes.',
        'numeric' => 'El campo :attribute debe ser menor o igual que :value.',
        'string' => 'El campo :attribute debe ser menor o igual que :value caracteres.',
    ],
    'mac_address' => 'El campo :attribute debe ser una dirección MAC válida.',
    'max' => [
        'array' => 'El campo :attribute no debe tener más de :max elementos.',
        'file' => 'El campo :attribute no debe ser mayor que :max kilobytes.',
        'numeric' => 'El campo :attribute no debe ser mayor que :max.',
        'string' => 'El campo :attribute no debe tener más de
        caracteres.',
    ],
    'max_digits' => 'El campono debe tener más dedígitos.',
    'mimes' => 'El campo debe ser un archivo de tipo: .',
    'mimetypes' => 'El campo debe ser un archivo de tipo: .',
    'min' => [
        'array' => 'El campo debe tener al menos elementos.',
        'file' => 'El campo debe tener al menos kilobytes.',
        'numeric' => 'El campo debe ser al menos .',
        'string' => 'El campo debe tener al menos caracteres.',
    ],
    'min_digits' => 'El campo debe tener al menos dígitos.',
    'missing' => 'El campo debe faltar.',
    'missing_if' => 'El campo debe faltar cuando es .',
    'missing_unless' => 'El campo debe faltar a menos que sea .',
    'missing_with' => 'El campo debe faltar cuando  está presente.',
    'missing_with_all' => 'El campo
        debe faltar cuando
        están presentes.',
    'multiple_of' => 'El campo
        debe ser un múltiplo de
        .',
    'not_in' => 'El
        seleccionado es inválido.',
    'not_regex' => 'El formato del campo
        es inválido.',
    'numeric' => 'El campo
        debe ser un número.',
    'password' => [
        'letters' => 'El campo
        debe contener al menos una letra.',
        'mixed' => 'El campo
        debe contener al menos una letra mayúscula y una minúscula.',
        'numbers' => 'El campo
        debe contener al menos un número.',
        'symbols' => 'El campo
        debe contener al menos un símbolo.',
        'uncompromised' => 'El
        proporcionado ha aparecido en una filtración de datos. Por favor, elija un
        diferente.',
    ],
    'present' => 'El campo
        debe estar presente.',
    'present_if' => 'El campo
        debe estar presente cuando
        es
        .',
    'present_unless' => 'El campo
        debe estar presente a menos que
        sea
        .',
    'present_with' => 'El campo
        debe estar presente cuando
        está presente.',
    'present_with_all' => 'El campo
        debe estar presente cuando
        están presentes.',
    'prohibited' => 'El campo
        está prohibido.',
    'prohibited_if' => 'El campo
        está prohibido cuando
        es
        .',
    'prohibited_unless' => 'El campo
        está prohibido a menos que
        esté en
        .',
    'prohibits' => 'El campo
        prohíbe que
        esté presente.',
    'regex' => 'El formato del campo
        es inválido.',
    'required' => 'El campo
        es obligatorio.',
    'required_array_keys' => 'El campo
        debe contener entradas para:
        .',
    'required_if' => 'El campo
        es obligatorio cuando
        es
        .',
    'required_if_accepted' => 'El campo
        es obligatorio cuando
        es aceptado.',
    'required_if_declined' => 'El campo
        es obligatorio cuando
        es declinado.',
    'required_unless' => 'El campo
        es obligatorio a menos que
        esté en
        .',
    'required_with' => 'El campo
        es obligatorio cuando
        está presente.',
    'required_with_all' => 'El campo
        es obligatorio cuando
        están presentes.',
    'required_without' => 'El campo
        es obligatorio cuando
        no está presente.',
    'required_without_all' => 'El campo
        es obligatorio cuando ninguno de los
        están presentes.',
    'same' => 'El campo
        y
        deben coincidir.',
    'size' => [
        'array' => 'El campo
        debe contener
        elementos.',
        'file' => 'El campo
        debe ser de
        kilobytes.',
        'numeric' => 'El campo
        debe ser de
        .',
        'string' => 'El campo
        debe ser de
        caracteres.',
    ],
    'starts_with' => 'El campo
        debe comenzar con uno de los siguientes:
        .',
    'string' => 'El campo
        debe ser una cadena.',
    'timezone' => 'El campo
        debe ser una zona horaria válida.',
    'unique' => 'Ya existe en nuestra base de datos.',
    'uploaded' => 'El
        falló al subirse.',
    'uppercase' => 'El campo
        debe estar en mayúsculas.',
    'url' => 'El formato de
        es inválido.',
    'ulid' => 'El campo
        debe ser un ULID válido.',
    'uuid' => 'El campo
        debe ser un UUID válido.',
    /*
|--------------------------------------------------------------------------
| Líneas de idioma de validación personalizadas
|--------------------------------------------------------------------------
|
| Aquí puedes especificar mensajes de validación personalizados para atributos usando la
| convención "attribute.rule" para nombrar las líneas. Esto hace que sea rápido
| especificar una línea de idioma personalizada específica para una regla de atributo dada.
|
*/

    'custom' => [
        'attribute-name' => [
            'rule-name' => 'custom-message',
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Atributos de validación personalizados
    |--------------------------------------------------------------------------
    |
    | Las siguientes líneas de idioma se utilizan para intercambiar nuestro marcador de posición de atributo
    | con algo más comprensible para el lector, como "Dirección de correo electrónico" en lugar
    | de "email". Esto simplemente nos ayuda a hacer nuestro mensaje más expresivo.
    |
    */

    'attributes' => [],

];
