import React from 'react';
import { Card } from "flowbite-react";

export default function ArticuloCarta({ articulo }) {
  const cardStyle = {
    position: "relative", // Añadido para contener elementos superpuestos
    minWidth: "100%",
    maxWidth: "25em",
    minHeight: "100%",
    maxHeight: "40em",
  };

  const imagenStyle = {
    width: "100%", // La imagen ocupará todo el ancho del contenedor
    height: "100%", // La imagen ocupará todo el alto del contenedor
    objectFit: "cover", // La imagen se ajustará para cubrir el contenedor
  };

  const tipoStyle = {
    position: "absolute",
    top: "30px",
    left: "30px",
    padding: "5px 10px",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "#ffffff",
    borderRadius: "5px",
    fontWeight: "bold",
    fontSize: "14px",
    zIndex: 1, // Asegura que el tipo de noticia esté encima de la imagen
  };

  const tituloStyle = {
    position: "absolute",
    bottom: "0px",
    left: "50%",
    transform: "translateX(-50%)",
    textAlign: "center",
    width: "90%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    color: "#ffffff",
    padding: "5px",
    borderRadius: "5px",
    zIndex: 1, // Asegura que el título esté encima de la imagen
  };

  return (
    <a href={`/articulos/${articulo.id}`}>
      <Card className="max-w-sm flex-1 bg-black" style={cardStyle}>
        <img src={articulo.imagen} alt="Artículo" style={imagenStyle} />
        <div className='font-koulen' style={tipoStyle}>{articulo.tipo}</div>
        <h5 className="text-2xl font-koulen tracking-tight " style={tituloStyle}>
          {articulo.nombre}
        </h5>
      </Card>
    </a>
  );
}
