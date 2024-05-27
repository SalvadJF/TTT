import { Card } from "flowbite-react";

export default function NoticiaDash({ noticia }) {
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
    top: "30px",
    left: "30px",
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
    bottom: "5px",
    left: "50%",
    transform: "translateX(-50%)",
    textAlign: "center",
    width: "90%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    color: "#ffffff",
    padding: "10px",
    borderRadius: "5px",
    zIndex: 1,
  };

  return (
    <a href={`/noticias/${noticia.id}`}>
      <Card className="max-w-sm flex-1 bg-black" style={cardStyle}>
        <img src={noticia.imagen} alt="Noticia" style={imagenStyle} />
        <div className="font-koulen" style={tipoStyle}>{noticia.tipo}</div>
        <h5 className="text-2xl font-koulen tracking-tight" style={tituloStyle}>
          {noticia.titulo}
        </h5>
      </Card>
    </a>
  );
}
