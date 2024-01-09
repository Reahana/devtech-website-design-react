import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './Components/Footer/Footer'
import Nav from './Components/Nav/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav></Nav>
      <h1>Welcome</h1>
      <Footer></Footer>
    </>
  )
}

export default App
