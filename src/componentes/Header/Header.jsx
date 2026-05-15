import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <nav>
        <Link to="/">Inicio</Link>

        <Link to="/productos">
          Productos
        </Link>

        <Link to="/contacto">
          Contacto
        </Link>
      </nav>
    </header>
  )
}

export default Header