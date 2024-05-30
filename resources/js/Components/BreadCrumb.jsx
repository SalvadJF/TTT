import React from "react";
import { HiHome } from "react-icons/hi";

function BreadcrumbItem({ href, icon, children }) {
  return (
    <li className="inline-flex items-center">
      {icon && React.createElement(icon, { className: "mr-1 h-4 w-4" })}
      <a href={href} className="text-white text-lg">{children}</a>
      <span className="mx-2">/</span>
    </li>
  );
}

function Breadcrumb({ items }) {
  return (
    <nav aria-label="breadcrumb" className="ml-5 font-koulen text-white text-lg">
      <ul className="flex">
        {items.map((item, index) => (
          <BreadcrumbItem key={index} href={item.href} icon={item.icon}>
            {item.text}
          </BreadcrumbItem>
        ))}
      </ul>
    </nav>
  );
}

function Breadcrumbs() {
  const items = [{ href: "/dashboard", icon: HiHome, text: "Home" }];
  return <Breadcrumb items={items} />;
}

function BreadcrumbArticulos() {
  const items = [
    { href: "/dashboard", icon: HiHome, text: "Home" },
    { href: "/articulos", text: "Articulos" }
  ];
  return <Breadcrumb items={items} />;
}

function BreadcrumbArticulosShow({ articulo }) {
  const items = [
    { href: "/dashboard", icon: HiHome, text: "Home" },
    { href: "/articulos", text: "Articulos" },
    { href: "", text: articulo.nombre }
  ];
  return <Breadcrumb items={items} />;
}

function BreadcrumbArticulosFunciones({ lugar }) {
  const items = [
    { href: "/dashboard", icon: HiHome, text: "Home" },
    { href: "/articulos", text: "Articulos" },
    { href: "", text: lugar }
  ];
  return <Breadcrumb items={items} />;
}

function BreadcrumbNoticias() {
  const items = [
    { href: "/dashboard", icon: HiHome, text: "Home" },
    { href: "/noticias", text: "Noticias" }
  ];
  return <Breadcrumb items={items} />;
}

function BreadcrumbNoticiasShow({ noticia }) {
  const items = [
    { href: "/dashboard", icon: HiHome, text: "Home" },
    { href: "/noticias", text: "Noticias" },
    { href: "", text: noticia.titulo }
  ];
  return <Breadcrumb items={items} />;
}

function BreadcrumbNoticiasFunciones({ lugar }) {
  const items = [
    { href: "/dashboard", icon: HiHome, text: "Home" },
    { href: "/noticias", text: "Noticias" },
    { href: "", text: lugar }
  ];
  return <Breadcrumb items={items} />;
}

function BreadcrumbOtros({ nombre }) {
  const items = [
    { href: "/dashboard", icon: HiHome, text: "Home" },
    { href: "", text: nombre }
  ];
  return <Breadcrumb items={items} />;
}

function BreadcrumbAdmin() {
  const items = [
    { href: "/dashboard", icon: HiHome, text: "Home" },
    { href: "/admin", text: "Admin" }
  ];
  return <Breadcrumb items={items} />;
}

function BreadcrumbPerfilOtros({ nombre }) {
  const items = [
    { href: "/dashboard", icon: HiHome, text: "Home" },
    { href: "/profile/index", text: "Mi Perfil" },
    { href: "", text: nombre }
  ];
  return <Breadcrumb items={items} />;
}

function BreadcrumbAdminShows({ shows, ruta }) {
  const items = [
    { href: "/dashboard", icon: HiHome, text: "Home" },
    { href: "/admin", text: "Admin" },
    { href: ruta, text: shows }
  ];
  return <Breadcrumb items={items} />;
}

export {
  Breadcrumbs,
  BreadcrumbArticulos,
  BreadcrumbArticulosShow,
  BreadcrumbArticulosFunciones,
  BreadcrumbNoticias,
  BreadcrumbNoticiasShow,
  BreadcrumbNoticiasFunciones,
  BreadcrumbOtros,
  BreadcrumbAdmin,
  BreadcrumbAdminShows,
  BreadcrumbPerfilOtros
};
