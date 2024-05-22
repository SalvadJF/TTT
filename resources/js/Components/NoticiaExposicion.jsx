import NoticiaCarta from "./NoticiaCarta";

export default function NoticiaExposicion({ noticias }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-center mt-5 p-10">
            {noticias.data.map(noticia => (
                <NoticiaCarta noticia={noticia} key={noticia.id} />
            ))}
        </div>
    );
}
