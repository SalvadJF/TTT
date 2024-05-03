<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateNoticiaRequest extends FormRequest
{
    public function authorize(): bool
    {
        // Verifica si el usuario está autenticado
        return auth()->check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules()
    {
        return [
            'titulo' => 'sometimes|string|max:255',
            'contenido' => 'sometimes|string',
        ];
    }

    public function messages()
    {
        return [
            'titulo.max' => 'El titulo del artículo no puede ser mayor a 255 caracteres.',
        ];
    }
}
