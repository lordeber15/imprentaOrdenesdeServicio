import { Routes, Route } from 'react-router-dom'
import Login from "./page/login"
import './App.css'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App
