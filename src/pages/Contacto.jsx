function Contacto() {
  return (
    <main>
      <h1>Contacto</h1>

      <form>
        <input type="text" placeholder="Nombre" />

        <input type="email" placeholder="Email" />

        <textarea placeholder="Mensaje"></textarea>

        <button type="submit">
          Enviar
        </button>
      </form>
    </main>
  )
}

export default Contacto