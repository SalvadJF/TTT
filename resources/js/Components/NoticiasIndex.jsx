import NoticiaDash from './NoticiaDash';

export default function NoticiasIndex({ noticias }) {
  return (
    <div className="flex flex-wrap gap-5 justify-center">
      {noticias.data.map(noticia => (
        <div key={noticia.id}>
          <NoticiaDash noticia={noticia} />
        </div>
      ))}
    </div>
  );
}
