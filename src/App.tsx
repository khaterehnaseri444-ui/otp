
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import ProtectedRoute from './core/provider/ProtectedRoute'
import Homeee from './pages'
import { HeaderActionsProvider } from './core/provider/HeaderActionProvider/HeaderAction'

function App() {

  return (
    <HeaderActionsProvider>
      <BrowserRouter>
        {/* <ToastProvider /> */}
        {/* <ProtectedRoute> */}
          <Routes>
            <Route path='/' element={<Homeee/>} />
          </Routes>
        {/* </ProtectedRoute> */}
      </BrowserRouter>
    // </HeaderActionsProvider>
  )
}

export default App
