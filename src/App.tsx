import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HeaderActionsProvider } from './core/provider/HeaderActionProvider/HeaderAction'
import HomePage from './pages/home'

function App() {

  return (
    <HeaderActionsProvider>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage/>} />
          </Routes>
      </BrowserRouter>
    </HeaderActionsProvider>
  )
}

export default App
