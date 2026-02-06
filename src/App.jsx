import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'

import './App.css'
import Nav from './components/Nav'

function App() {
  return (
    <>
      <Nav/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
       
      </Routes>
    </>
  )
}

export default App
