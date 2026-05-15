import { useContext } from 'react'

import { CarritoContext } from '../../context/CarritoContext'

function ProductoCard({ producto }) {
  const { agregarAlCarrito } = useContext(CarritoContext)

  return (
    <article className="producto-card">
      <img
        src={producto.imagen}
        alt={producto.nombre}
      />

      <h3>{producto.nombre}</h3>

      <p>{producto.descripcion}</p>

      <p>$ {producto.precio}</p>

      <button
        onClick={() => agregarAlCarrito(producto)}
      >
        Agregar al carrito
      </button>
    </article>
  )
}

export default ProductoCard