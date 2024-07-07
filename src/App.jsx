import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Component/navbar'
import Home from './Home'
import Edit from './Component/Edit'
import Submit from './Component/Submit'
import Register from './Pages/Register'
import Table from './Pages/table'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/navbar' element={<Navbar />} />
          <Route path='/edit' element={<Edit />} />
          <Route path='/submit' element={<Submit />} />
          <Route path='/register' element={<Register/>}/>
          <Route path='/table' element={<Table/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
