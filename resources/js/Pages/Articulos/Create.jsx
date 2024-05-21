import { useForm } from '@inertiajs/react';

const CreateArticulo = ({ categorias, etiquetas }) => {
  const { data, setData, errors, post } = useForm({
    nombre: '',
    descripcion: '',
    tipo: '',
    imagen: null,
    modelo: null,
    categorias: [],
    etiquetas: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('articulos.store'), {
      onSuccess: () => {
        // Manejar éxito, redireccionar o mostrar un mensaje
      },
    });
  };

  return (
    <div>
      <h1>Crear Artículo</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={data.nombre}
            onChange={(e) => setData('nombre', e.target.value)}
          />
          {errors.nombre && (
            <span className="error">{errors.nombre}</span>
          )}
        </div>
        <div>
          <label>Descripción:</label>
          <textarea
            value={data.descripcion}
            onChange={(e) => setData('descripcion', e.target.value)}
          />
          {errors.descripcion && (
            <span className="error">{errors.descripcion}</span>
          )}
        </div>
        <div>
          <label>Tipo:</label>
          <select
            value={data.tipo}
            onChange={(e) => setData('tipo', e.target.value)}
          >
            <option value="">Seleccione tipo</option>
            <option value="Modelo_3d">Modelo 3D</option>
            <option value="Textura">Textura</option>
          </select>
          {errors.tipo && (
            <span className="error">{errors.tipo}</span>
          )}
        </div>
        <div>
          <label>Imagen:</label>
          <input
            type="file"
            onChange={(e) => setData('imagen', e.target.files[0])}
          />
          {errors.imagen && (
            <span className="error">{errors.imagen}</span>
          )}
        </div>
        <div>
          <label>Modelo:</label>
          <input
            type="file"
            onChange={(e) => setData('modelo', e.target.files[0])}
          />
          {errors.modelo && (
            <span className="error">{errors.modelo}</span>
          )}
        </div>
        <div>
          <label>Categorías:</label>
          <select
            multiple
            value={data.categorias}
            onChange={(e) => setData('categorias', Array.from(e.target.selectedOptions, (option) => option.value))}
          >
            {categorias.map(categoria => (
              <option key={categoria.id} value={categoria.id}>
                {categoria.nombre}
              </option>
            ))}
          </select>
          {errors.categorias && (
            <span className="error">{errors.categorias}</span>
          )}
        </div>
        <div>
          <label>Etiquetas:</label>
          <select
            multiple
            value={data.etiquetas}
            onChange={(e) => setData('etiquetas', Array.from(e.target.selectedOptions, (option) => option.value))}
          >
            {etiquetas.map(etiqueta => (
              <option key={etiqueta.id} value={etiqueta.id}>
                {etiqueta.nombre}
              </option>
            ))}
          </select>
          {errors.etiquetas && (
            <span className="error">{errors.etiquetas}</span>
          )}
        </div>
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default CreateArticulo;
