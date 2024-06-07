<?php

namespace App\Http\Controllers;

use App\Models\Etiqueta;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class EtiquetaController extends Controller
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
        $validatedData = $request->validate([
            'nombre' => 'required|unique|max:25'
        ]);

        $categoria = Etiqueta::create([
            'nombre' => $request->nombre,
        ]);

        session()->flash('success', 'Etiqueta creada con éxito.');

        return;
    }

    /**
     * Display the specified resource.
     */
    public function show(Etiqueta $etiqueta)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Etiqueta $etiqueta)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Etiqueta $etiqueta)
    {
        // Verificar si el usuario autenticado es administrador
        if (!auth()->user()->isAdmin()) {
            abort(403); // No autorizado
        }

        $validatedData = $request->validate([
           'nombre' => 'required|unique|max:25',
       ]);


       $etiqueta->update($validatedData);

       session()->flash('success', 'Categoria actualizada con éxito.');

       return;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Etiqueta $etiqueta)
    {
        // Verificar si el usuario autenticado es administrador
        if (!auth()->user()->isAdmin()) {
            abort(403); // No autorizado
        }

        $etiqueta->delete();

       return;
    }
}
