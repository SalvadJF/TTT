import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";

function Breadcrumbs() {
  return (
    <Breadcrumb aria-label="breadcrumb" className="ml-5 font-koulen text-white">
      <Breadcrumb.Item href="/dashboard" icon={HiHome}>
        Home
      </Breadcrumb.Item>
    </Breadcrumb>
  );
}

function BreadcrumbArticulos() {
  return (
    <Breadcrumb aria-label="breadcrumb" className="ml-5 font-koulen text-white">
      <Breadcrumb.Item href="/dashboard" icon={HiHome}>
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Item href="/articulos">
        Articulos
      </Breadcrumb.Item>
    </Breadcrumb>
  );
}

function BreadcrumbArticulosShow({ articulo }) {
  return (
    <Breadcrumb aria-label="breadcrumb" className="ml-5 font-koulen text-white">
      <Breadcrumb.Item href="/dashboard" icon={HiHome}>
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Item href="/articulos">
        Articulos
      </Breadcrumb.Item>
      <Breadcrumb.Item href="">
        {articulo.nombre}
      </Breadcrumb.Item>
    </Breadcrumb>
  );
}

function BreadcrumbArticulosFunciones({ lugar }) {
    return (
      <Breadcrumb aria-label="breadcrumb" className="ml-5 font-koulen text-white">
        <Breadcrumb.Item href="/dashboard" icon={HiHome}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href="/articulos">
          Articulos
        </Breadcrumb.Item>
        <Breadcrumb.Item href="">
          {lugar}
        </Breadcrumb.Item>
      </Breadcrumb>
    );
  }

function BreadcrumbNoticias() {
  return (
    <Breadcrumb aria-label="breadcrumb" className="ml-5 font-koulen text-white">
      <Breadcrumb.Item href="/dashboard" icon={HiHome}>
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Item href="/noticias">
        Noticias
      </Breadcrumb.Item>
    </Breadcrumb>
  );
}

function BreadcrumbNoticiasShow({ noticia }) {
  return (
    <Breadcrumb aria-label="breadcrumb" className="ml-5 font-koulen text-white">
      <Breadcrumb.Item href="/dashboard" icon={HiHome}>
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Item href="/noticias">
        Noticias
      </Breadcrumb.Item>
      <Breadcrumb.Item href="">
        {noticia.titulo}
      </Breadcrumb.Item>
    </Breadcrumb>
  );
}

function BreadcrumbNoticiasFunciones({ lugar }) {
    return (
      <Breadcrumb aria-label="breadcrumb" className="ml-5 font-koulen text-white">
        <Breadcrumb.Item href="/dashboard" icon={HiHome}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href="/noticias">
          Noticias
        </Breadcrumb.Item>
        <Breadcrumb.Item href="">
          {lugar}
        </Breadcrumb.Item>
      </Breadcrumb>
    );
  }

function BreadcrumbOtros( {nombre} ) {
  return (
    <Breadcrumb aria-label="breadcrumb" className="ml-5 font-koulen text-white">
      <Breadcrumb.Item href="/dashboard" icon={HiHome}>
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Item href="">
        {nombre}
      </Breadcrumb.Item>
    </Breadcrumb>
  );
}

function BreadcrumbAdmin() {
    return (
      <Breadcrumb aria-label="breadcrumb" className="ml-5 font-koulen text-white">
        <Breadcrumb.Item href="/dashboard" icon={HiHome}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href="/admin/index">
          Admin
        </Breadcrumb.Item>
      </Breadcrumb>
    );
  }

  function BreadcrumbPerfilOtros( { nombre }) {
    return (
      <Breadcrumb aria-label="breadcrumb" className="ml-5 font-koulen text-white">
        <Breadcrumb.Item href="/dashboard" icon={HiHome}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href="/profile/index">
          Mi Perfil
        </Breadcrumb.Item>
        <Breadcrumb.Item href="">
          {nombre}
        </Breadcrumb.Item>
      </Breadcrumb>
    );
  }

  function BreadcrumbAdminShows( {shows , ruta} ) {
    return (
      <Breadcrumb aria-label="breadcrumb" className="ml-5 font-koulen text-white">
        <Breadcrumb.Item href="/dashboard" icon={HiHome}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href="/admin/index">
          Admin
        </Breadcrumb.Item>
        <Breadcrumb.Item href={ruta}>
          {shows}
        </Breadcrumb.Item>
      </Breadcrumb>
    );
  }

export { Breadcrumbs,
    BreadcrumbArticulos,
    BreadcrumbArticulosShow,
    BreadcrumbArticulosFunciones,
    BreadcrumbNoticias,
    BreadcrumbNoticiasShow,
    BreadcrumbNoticiasFunciones,
    BreadcrumbOtros,
    BreadcrumbAdmin,
    BreadcrumbAdminShows,
    BreadcrumbPerfilOtros };
