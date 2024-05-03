<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreArticuloRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
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
            'nombre' => 'required|string|max:255',
            'descripcion' => 'required|string',
        ];
    }

    public function messages()
    {
        return [
            'nombre.required' => 'El nombre del artículo es obligatorio.',
            'nombre.max' => 'El nombre del artículo no puede ser mayor a 255 caracteres.',
            'descripcion.required' => 'La descripción del artículo es obligatoria.',
        ];
    }
}
