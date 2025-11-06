import { useState } from 'react'
import './App.css'
import { HashRouter, Route } from 'react-router'
import { Routes } from 'react-router'
import Home from "./components/Home"
import About from "./components/About"

function App() {
  const [count, setCount] = useState(0)

  return <HashRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
  </HashRouter>
}

export default App
