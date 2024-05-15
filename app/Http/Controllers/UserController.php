<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function destroy(User $usuario)
    {
        // Verificar si el usuario autenticado es el creador de la noticia o es administrador
        if  (!auth()->user()->isAdmin()) {
            abort(403); // No autorizado
        }

        $usuario->delete();

        session()->flash('success', 'El usuario ha sido eliminado.');
        return back();
    }
}
