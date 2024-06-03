<?php

namespace App\Http\Controllers;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

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
        $articulos = $usuario->articulos()
            ->with([
                'contadores' => function ($query) {
                    $query->where('nombre', 'Likes');
                }
            ])
            ->orderBy('created_at', 'desc')
            ->paginate(0);

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

        return;
    }


    public function blockUser(User $usuario)
    {
        $usuario->blocked = true;
        $usuario->update();

        return response()->json([
            'success' => true,
        ]);
    }

    public function unBlockUser(User $usuario)
    {
        $usuario->blocked = false;
        $usuario->update();

        return response()->json([
            'success' => true,
        ]);
    }

    public function cambiarDescripcion(Request $request, User $usuario)
    {
        $request->validate([
            'descripcion' => 'nullable|string|max:6555',
        ]);

        $usuario->descripcion = $request->descripcion;
        $usuario->save();

        return redirect()->back()->with('success', 'Descripción actualizada correctamente.');
    }

    public function cambiarCumple(Request $request, User $usuario)
    {
        $request->validate([
            'fecha_nacimiento' => 'nullable|date|before:' . Carbon::now()->subYears(18)->format('Y-m-d') . '|after:' . Carbon::now()->subYears(100)->format('Y-m-d'),
        ], [
            'fecha_nacimiento.before' => 'Debes tener al menos 18 años.',
            'fecha_nacimiento.after' => 'La fecha de nacimiento no puede ser de hace más de 100 años.',
        ]);

        $usuario->fecha_nacimiento = $request->fecha_nacimiento;
        $usuario->save();

        return redirect()->back()->with('success', 'Fecha de nacimiento actualizada correctamente.');
    }

    public function cambiarAvatar(Request $request, User $usuario)
    {
        $request->validate([
            'avatar' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        if ($request->hasFile('avatar')) {
            // Eliminar el avatar anterior si existe
            if ($usuario->avatar && file_exists(public_path($usuario->avatar))) {
                unlink(public_path($usuario->avatar));
            }

            // Guardar el nuevo avatar
            $avatarNombre = 'Usuario_' . uniqid() . '.' . $request->avatar->extension();
            $request->avatar->move(public_path('img/users'), $avatarNombre);
            $usuario->avatar = '/img/users/' . $avatarNombre;
            $usuario->save();
        }

        return redirect()->back()->with('success', 'Avatar actualizado correctamente.');
    }


}
