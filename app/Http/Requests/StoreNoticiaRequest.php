<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreNoticiaRequest extends FormRequest
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
            'titulo' => 'required|string|max:255',
            'contenido' => 'required|string',
        ];
    }

    public function messages()
    {
        return [
            'titulo.required' => 'El titulo de la noticia es obligatorio.',
            'titulo.max' => 'El titulo de la noticia no puede ser mayor a 255 caracteres.',
            'contenido.required' => 'El contenido de la noticia es obligatorio.',
        ];
    }
}
