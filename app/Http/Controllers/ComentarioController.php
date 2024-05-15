<?php

namespace App\Http\Controllers;

use App\Models\Comentario;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreComentarioRequest;
use App\Http\Requests\UpdateComentarioRequest;
use Illuminate\Http\Request;

class ComentarioController extends Controller
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
        // Validar los datos del formulario
        $request->validate([
            'contenido' => 'required',
            'comentable_type' => 'required',
            'comentable_id' => 'required',
        ]);

        // Crear el comentario
        $comentario = new Comentario();
        $comentario->contenido = $request->contenido;
        $comentario->user_id = auth()->id(); // Asignar el ID del usuario autenticado
        $comentario->comentable_type = $request->comentable_type;
        $comentario->comentable_id = $request->comentable_id;
        $comentario->save();

        // Redireccionar a la página anterior o a donde sea adecuado
        return redirect()->back()->with('success', 'Comentario agregado correctamente.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Comentario $comentario)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Comentario $comentario)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Comentario $comentario)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Comentario $comentario)
    {
        //
    }
}
