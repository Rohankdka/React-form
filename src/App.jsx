import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Navbar from './Component/navbar'
import Home from './Home'
import Form from './Component/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/navbar' element={<Navbar/>}/>
        <Route path='/form' element={<Form/>}/>
      </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
