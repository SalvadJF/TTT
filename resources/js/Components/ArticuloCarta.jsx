import React from 'react';
import { Card } from "flowbite-react";
import LikeBoton from './LikeBoton'; // Importamos el componente LikeBoton

export default function ArticuloCarta({ articulo }) {
  const cardStyle = {
    position: "relative",
    minWidth: "100%",
    maxWidth: "25em",
    minHeight: "100%",
    maxHeight: "40em",
  };

  const imagenStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  const tipoStyle = {
    position: "absolute",
    top: "10px",
    left: "10px",
    padding: "5px 10px",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "#ffffff",
    borderRadius: "5px",
    fontWeight: "bold",
    fontSize: "14px",
    zIndex: 1,
  };

  const tituloStyle = {
    position: "absolute",
    bottom: "-20px",
    left: "50%",
    transform: "translateX(-50%)",
    textAlign: "center",
    width: "90%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    color: "#ffffff",
    padding: "5px",
    borderRadius: "5px",
    zIndex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };

  const likesStyle = {
    display: "flex",
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    color: "#ffffff",
    padding: "5px",
    borderRadius: "5px",
    top: "30px", // Adjusted top position
    right: "30px", // Adjusted right position
    zIndex: 1,
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <Card className="max-w-sm flex-1 bg-black" style={cardStyle}>
        <a href={`/articulos/${articulo.id}`} style={{ position: "relative", display: "block" }}>
          <img src={articulo.imagen} alt="Artículo" style={imagenStyle} />
          <div className='font-koulen' style={tipoStyle}>{articulo.tipo}</div>
          <div style={tituloStyle}>
            <h5 className="text-2xl font-koulen tracking-tight">
              {articulo.nombre}
            </h5>
          </div>
        </a>
        <div style={likesStyle}>
          <LikeBoton articuloId={articulo.id} initialLikes={articulo.contadores.find(contador => contador.nombre === 'Likes').cantidad} />
        </div>
      </Card>
    </div>
  );
}
