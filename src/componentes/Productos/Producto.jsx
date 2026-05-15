function Producto({ producto }) {
  return (
    <article className="producto-card">
      <img src={producto.img} alt={producto.nombre} />

      <h3>{producto.nombre}</h3>

      <p>{producto.descripcion}</p>

      <p>$ {producto.precio}</p>

      <button>
        Agregar
      </button>
    </article>
  )
}

export default Producto