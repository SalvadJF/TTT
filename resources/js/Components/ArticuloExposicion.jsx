import ArticuloCarta from "./ArticuloCarta";

export default function ArticuloExposicion({ articulos }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-center mt-5 p-20">
            {articulos.data.map(articulo => (
                <ArticuloCarta articulo={articulo} key={articulo.id} />
            ))}
        </div>
    );
}
