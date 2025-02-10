import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Produtos from './pages/Produtos'
import Contato from './pages/Contato'

function App(){
  const[count, setCount] = useState(0)

  return(
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/produtos" element = {<Produtos/>}/>
        <Route path="/contato" element = {<Contato/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App