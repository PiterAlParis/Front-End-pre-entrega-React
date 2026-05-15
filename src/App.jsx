import { BrowserRouter } from 'react-router-dom'

import AppRouter from './routes/AppRouter'

import { CarritoProvider } from './context/CarritoContext'

function App() {
  return (
    <BrowserRouter>
      <CarritoProvider>
        <AppRouter />
      </CarritoProvider>
    </BrowserRouter>
  )
}

export default App