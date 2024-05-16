import { Routes, Route } from 'react-router-dom'
import Login from "./page/login"
import Dashboard from './page/dashboard'
import DetallesOrden from "./page/deteallesOrden"
import { useLocation } from "react-router-dom";
import Navbar from './components/navbar';
import './App.css'

function App() {
  const locationNow = useLocation();
  return (
    <div>
      {locationNow.pathname !== "/" && <Navbar />}
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/detallesOrden' element={<DetallesOrden/>}/>
      </Routes>
    </div>
  )
}

export default App
