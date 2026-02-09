import { NavLink } from 'react-router-dom'
import { useEffect, useState } from "react"


function Nav() {
  const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  
  return (
    <nav className={`fixed top-0 left-0 w-screen h-11 transition-all
    ${scrolled ? "bg-[#c96928]" : "bg-transparent"}
  `}>
      <ul className="flex h-full text-1xl">
        <li className="flex-1 sm:text-3xl ">
          <NavLink
            to="/"
            className="flex h-full w-full items-center justify-center font-light text-1xl text-center hover:bg-[#ee9c21] hover:text-[#e9d7a5]"
          >
            Inicio
          </NavLink>
        </li>

        <li className="flex-1 sm:text-3xl">
          <NavLink
            to="/control"
            className="flex h-full w-full items-center justify-center font-light  text-center hover:bg-[#ee9c21] hover:text-[#e9d7a5]"
          >
            Control
          </NavLink>
        </li>

        <li className="flex-1 sm:text-3xl">
          <NavLink
            to="/balance"
            className="flex h-full w-full items-center justify-center font-light text-center hover:bg-[#ee9c21] hover:text-[#e9d7a5]"
          >
            Balance
          </NavLink>
        </li>

        <li className="flex-1 sm:text-3xl">
          <NavLink
            to="/qa"
            className="flex h-full w-full items-center justify-center font-light text-center hover:bg-[#ee9c21] hover:text-[#e9d7a5]"
          >
            QA
          </NavLink>
        </li>

        <li className="flex-1 sm:text-3xl">
          <NavLink
            to="/login"
            className="flex h-full w-full items-center justify-center font-light text-center hover:bg-[#ee9c21] hover:text-[#e9d7a5]"
          >
            Iniciar sesión
          </NavLink>
        </li>
        
      </ul>
    </nav>
  )
}

export default Nav
