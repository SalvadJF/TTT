import ArticuloCarta from './ArticuloCarta';


export default function ArticuloLista  ({ articulos }) {
    return (
        <div className="flex flex-wrap gap-5 justify-center">
            {articulos.data.map(articulo => (
                <ArticuloCarta articulo={articulo} key={articulo.id} />
            ))}
        </div>
    );
};
