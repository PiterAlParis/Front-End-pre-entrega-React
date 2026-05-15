import { useEffect, useState } from 'react'

import ProductoCard from './ProductoCard'

function ListaProductos() {
  const [productos, setProductos] = useState([])

  useEffect(() => {
    fetch('/data/productos.json')
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch((error) => console.log(error))
  }, [])

  return (
    <section className="contenedor-productos">
      {productos.map((producto) => (
        <ProductoCard
          key={producto.id}
          producto={producto}
        />
      ))}
    </section>
  )
}

export default ListaProductos