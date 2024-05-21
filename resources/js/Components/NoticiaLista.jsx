import NoticiaCarta from './NoticiaCarta';

export default function NoticiaLista  ({ noticias }) {
    return (
        <div className="flex flex-wrap gap-5 justify-center">
            {noticias.data.map(noticia => (
                <NoticiaCarta noticia={noticia} key={noticia.id} />
            ))}
        </div>
    );
};

