import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
      <Route path='/Home' element={<Home/>}></Route>
     </Routes>
    </>
  )
}

export default App
