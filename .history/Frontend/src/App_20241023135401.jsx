import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Add from './components/Add'
import Nav from './components/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav/>
     <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route element={<}
      <Route path='/Add' element={<Add/>}></Route>
      <Route path='/Home' element={<Home/>}></Route>
     
     </Routes>
    </>
  )
}

export default App
