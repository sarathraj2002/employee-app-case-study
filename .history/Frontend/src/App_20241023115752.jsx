import { useState } from 'react'

import './App.css'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
      <Route path='/Add' element={<Ad/>}></Route>
      <Route path='/Home' element={<Home/>}></Route>
     </Routes>
    </>
  )
}

export default App
