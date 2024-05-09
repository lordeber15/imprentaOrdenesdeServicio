import { Routes, Route } from 'react-router-dom'
import Login from "./page/login"
import Dashboard from './page/dashboard'
import './App.css'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </div>
  )
}

export default App
