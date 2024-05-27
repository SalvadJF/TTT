"use client";

import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";

function Breadcrumbs() {
  return (
    <Breadcrumb aria-label="breadcrumb" className="ml-5 font-koulen">
      <Breadcrumb.Item href="/dashboard" icon={HiHome}>
        Home
      </Breadcrumb.Item>
    </Breadcrumb>
  );
}

function BreadcrumbArticulos() {
  return (
    <Breadcrumb aria-label="breadcrumb" className="ml-5 font-koulen">
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
    <Breadcrumb aria-label="breadcrumb" className="ml-5 font-koulen">
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

function BreadcrumbNoticias() {
  return (
    <Breadcrumb aria-label="breadcrumb" className="ml-5 font-koulen">
      <Breadcrumb.Item href="/dashboard" icon={HiHome}>
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Item href="">
        Noticias
      </Breadcrumb.Item>
    </Breadcrumb>
  );
}

function BreadcrumbNoticiasShow({ noticia }) {
  return (
    <Breadcrumb aria-label="breadcrumb" className="ml-5 font-koulen">
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

function BreadcrumbOtros( {nombre} ) {
  return (
    <Breadcrumb aria-label="breadcrumb" className="ml-5 font-koulen">
      <Breadcrumb.Item href="/dashboard" icon={HiHome}>
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Item href="">
        {nombre}
      </Breadcrumb.Item>
    </Breadcrumb>
  );
}

export { Breadcrumbs, BreadcrumbArticulos, BreadcrumbArticulosShow, BreadcrumbNoticias, BreadcrumbNoticiasShow, BreadcrumbOtros };
