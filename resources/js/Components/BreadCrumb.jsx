import Breadcrumb from 'react-bootstrap/Breadcrumb';

function Breadcrumbs() {
  return (
    <Breadcrumb >
      <Breadcrumb.Item href="/dashboard">Home</Breadcrumb.Item>
    </Breadcrumb>
  );
}

function BreadcrumbArticulos() {
    return (
      <Breadcrumb class='ml-5 font-koulen'>
        <Breadcrumb.Item href="/dashboard">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/articulos">
          Articulos
        </Breadcrumb.Item>
      </Breadcrumb>
    );
  }

  function BreadcrumbArticulosShow( $articulo) {
    return (
      <Breadcrumb>
        <Breadcrumb.Item href="/dashboard">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/articulos">
          Articulos
        </Breadcrumb.Item>
        <Breadcrumb.Item href="">
          $articulo
        </Breadcrumb.Item>
      </Breadcrumb>
    );
  }

  function BreadcrumbNoticias( $articulo) {
    return (
      <Breadcrumb>
        <Breadcrumb.Item href="/dashboard">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="">
          Noticias
        </Breadcrumb.Item>
      </Breadcrumb>
    );
  }

  function BreadcrumbNoticiasShow( $noticia) {
    return (
      <Breadcrumb>
        <Breadcrumb.Item href="/dashboard">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/articulos">
          Noticias
        </Breadcrumb.Item>
        <Breadcrumb.Item href="">
          $noticia
        </Breadcrumb.Item>
      </Breadcrumb>
    );
  }

  function BreadcrumbNosotros() {
    return (
      <Breadcrumb>
        <Breadcrumb.Item href="/dashboard">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="">
          Nosotros
        </Breadcrumb.Item>
      </Breadcrumb>
    );
  }

export { Breadcrumbs, BreadcrumbArticulos, BreadcrumbArticulosShow, BreadcrumbNoticias, BreadcrumbNoticiasShow, BreadcrumbNosotros }
