import { BotonSecundario, BotonTipo } from "./Botones";


export default function NoticiaCarta({ noticia }) {
    return (
      <div className="w-full max-w-[1500px] flex flex-col md:flex-row bg-gray-950 text-white rounded-lg shadow-md overflow-hidden">
        <div className="w-full md:w-[50%]">
          <img
            className="w-full h-full object-cover"
            src={noticia.imagen}
            alt={noticia.titulo}
          />
        </div>
        <div className="p-4 flex flex-col justify-between w-full">
          <div>
            <a href={`/noticias/${noticia.id}`}>
              <h5 className=" ml-4 mt-4 text-4xl tracking-tight font-koulen text-white text-decoration-none">
                {noticia.titulo}
              </h5>
            </a>
            <div className="ml-10 mt-2 font-koulen p-30">
            <BotonTipo texto={noticia.tipo} />
            </div>
            <div className="font-lato m-4 p-4 text-xl">
                <p>
                {noticia.resumen}
                </p>
            </div>

          </div>
          <BotonSecundario
            ruta={`/noticias/${noticia.id}`}
            texto="Leer mas"
          />
        </div>
      </div>
    );
  }
