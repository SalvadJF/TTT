import { Card } from "flowbite-react";

export default function NoticiaCarta({ noticia }) {
  return (
    <Card className="max-w-sm flex-1 w-full" imgSrc={noticia.imagen} horizontal>
      <a href={`/noticias/${noticia.id}`}>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {noticia.titulo}
        </h5>
      </a>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {noticia.resumen}
      </p>
      <a
        href={`/noticias/${noticia.id}`}
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Leer más
        <svg
          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>
    </Card>
  );
}
