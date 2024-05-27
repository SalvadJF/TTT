import NoticiaCarta from './NoticiaCarta';

export default function NoticiaLista({ noticias }) {
  return (
    <div className="w-full flex flex-col gap-5 items-center">
      {noticias.data.map(noticia => (
        <NoticiaCarta noticia={noticia} key={noticia.id} />
      ))}
    </div>
  );
}
