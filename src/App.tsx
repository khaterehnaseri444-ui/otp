import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <HeaderActionsProvider>
      <BrowserRouter basename="/app">
        <ToastProvider />
        <ProtectedRoute>
          <Routes>
            {getRoutes(routes)}
          </Routes>
        </ProtectedRoute>
      </BrowserRouter>
    </HeaderActionsProvider>
  )
}

export default App
