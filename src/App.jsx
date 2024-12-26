import { useState } from 'react'
 
import logo from './assets/logo-grande-D.png'
 
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       
        
       
          <img src={logo} className="logo" alt="4x4 sin limite logo" />
          <h4>sitio en renovación</h4>
       
    </>
  )
}

export default App
