<?php

namespace App\Policies;

use Illuminate\Auth\Access\Response;
use App\Models\Articulo_tipo;
use App\Models\User;

class ArticuloTipoPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        //
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, Articulo_tipo $articuloTipo): bool
    {
        //
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        //
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Articulo_tipo $articuloTipo): bool
    {
        //
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Articulo_tipo $articuloTipo): bool
    {
        //
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, Articulo_tipo $articuloTipo): bool
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, Articulo_tipo $articuloTipo): bool
    {
        //
    }
}
