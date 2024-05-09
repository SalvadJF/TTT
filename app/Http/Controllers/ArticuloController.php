<?php

namespace App\Http\Controllers;

use App\Models\Articulo;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreArticuloRequest;
use App\Http\Requests\UpdateArticuloRequest;

class ArticuloController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $articulos = Articulo::paginate(8);
        return view('articulos.index', ['articulos' => $articulos]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('articulos.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreArticuloRequest $request)
    {
        $user = Auth::user();

        $articulo = new Articulo();
        $articulo->nombre = $request->nombre;
        $articulo->descripcion = $request->descripcion;
        $articulo->user_id = $user->id;
        $articulo->save();

        session()->flash('success', 'El artículo se ha creado correctamente.');
        return redirect()->route('articulos.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Articulo $articulo)
    {
        return view('articulos.show', ['articulo' => $articulo]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Articulo $articulo)
    {
        return view('articulos.edit', ['articulo' => $articulo]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateArticuloRequest $request, Articulo $articulo)
    {
        $articulo->update($request->only('nombre', 'descripcion'));

        session()->flash('success', 'El artículo se ha actualizado correctamente.');
        return redirect()->route('articulos.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Articulo $articulo)
    {
        $articulo->delete();

        session()->flash('success', 'El artículo se ha eliminado correctamente.');
        return redirect()->route('articulos.index');
    }
}
