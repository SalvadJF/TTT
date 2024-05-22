<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
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
        //
    }

    /**
     * Display the specified resource.
     */

    public function show(User $usuario)
    {
        $articulos = $usuario->articulos()->paginate(8);
        return inertia('Usuarios/Show', [
            'usuario' => $usuario,
            'articulos' => $articulos,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $usuario)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $usuario)
    {
        //
    }
    public function destroy(User $usuario)
    {
        // Verificar si el usuario autenticado es el creador de la noticia o es administrador
        if (!auth()->user()->isAdmin()) {
            abort(403); // No autorizado
        }

        $usuario->delete();

        return ;
    }

}
