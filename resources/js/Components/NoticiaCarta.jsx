export default function NoticiaCarta({ noticia }) {
    return (
      <div className="w-full max-w-[1500px] flex flex-col md:flex-row bg-gray-900 text-white rounded-lg shadow-md overflow-hidden">
        <div className="w-full md:w-[40%]">
          <img
            className="w-full h-full object-cover"
            src={noticia.imagen}
            alt={noticia.titulo}
          />
        </div>
        <div className="p-4 flex flex-col justify-between w-full">
          <div>
            <a href={`/noticias/${noticia.id}`}>
              <h5 className="text-2xl font-bold tracking-tight font-koulen">
                {noticia.titulo}
              </h5>
            </a>
            <div className="ml-10 mt-2 font-koulen">
                {noticia.tipo}
            </div>
            <p className="font-lato mt-2">
              {noticia.resumen}
            </p>
          </div>
          <a
            href={`/noticias/${noticia.id}`}
            className="inline-flex items-center px-3 py-2 mt-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Leer más
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ml-2"
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
        </div>
      </div>
    );
  }
