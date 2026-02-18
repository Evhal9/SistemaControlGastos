import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'

import './App.css'
import Nav from './components/Nav'
import Footer from './components/footer'

function App() {
  return (
    <>
      <Nav/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
       
      </Routes>
      <Footer/>
    </>
  )
}

export default App
