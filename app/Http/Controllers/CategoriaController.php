<?php

namespace App\Http\Controllers;

use App\Models\Categoria;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CategoriaController extends Controller
{
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'nombre' => 'required|unique:categorias|max:25'
        ]);

        $categoria = Categoria::create([
            'nombre' => $request->nombre,
        ]);

        session()->flash('success', 'Categoría creada con éxito.');

        return;
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Categoria $categoria)
    {
        // Verificar si el usuario autenticado es administrador
        if (!auth()->user()->isAdmin()) {
            abort(403); // No autorizado
        }

        $validatedData = $request->validate([
           'nombre' => 'required|unique|max:25',
       ]);


       $categoria->update($validatedData);

       session()->flash('success', 'Categoria actualizada con éxito.');

       return;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Categoria $categoria)

     {
         // Verificar si el usuario autenticado es administrador
         if (!auth()->user()->isAdmin()) {
             abort(403); // No autorizado
         }

         $categoria->delete();

        return;

     }
}
