import { Routes, Route } from 'react-router-dom'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

import Home from '../pages/Home'
import Productos from '../pages/Productos'
import Contacto from '../pages/Contacto'

function AppRouter() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>

      <Footer />
    </>
  )
}

export default AppRouter