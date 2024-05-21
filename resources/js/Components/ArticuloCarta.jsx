import Card from 'react-bootstrap/Card';

function ArticuloCarta({articulo}) {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src="{articulo.imagenURL}" alt="Imagen del Articulo {articulo.nombre}" />
      <Card.ImgOverlay>
        <Card.Title>{articulo.nombre}</Card.Title>
        <Card.Text>
         {articulo.descripcion}
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default ArticuloCarta;
