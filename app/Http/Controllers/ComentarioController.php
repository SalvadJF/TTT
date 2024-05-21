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
       // Validate form data

         $request->validate([
             'contenido' => 'required',
             'comentable_type' => 'required',
             'comentable_id' => 'required',
         ]);

       // Create the comment
       Comentario::create([
           'contenido' => $request->contenido,
           'user_id' => auth()->id(), // Assign the authenticated user's ID
           'comentable_type' => $request->comentable_type,
           'comentable_id' => $request->comentable_id,
       ]);

       // Redirect back or to the appropriate page
       return redirect()->back()->with('success', 'Comment added successfully.');

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
