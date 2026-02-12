import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react"
import logo from '../assets/logo.png'

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all
      ${scrolled ? "bg-[#8b6ad9]" : "bg-transparent"}`}
    >
      {/* Header */}
      <div className="flex h-11 items-center justify-between px-4 sm:hidden">
        <span className="text-black"> Logo</span>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-[#FFF4FA] text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Menu */}
      <ul
        className={`
          flex flex-col sm:flex-row
          sm:h-11
          ${menuOpen ? "block" : "hidden"} sm:flex
        `}
      >
        {[
          { to: "/", label: "Inicio" },
          { to: "/control", label: "Control" },
          { to: "/balance", label: "Balance" },
          { to: "/qa", label: "QA" },
          { to: "/login", label: "Iniciar sesión" },
        ].map(({ to, label }) => (
          <li key={to} className="flex-1">
            <NavLink
              to={to}
              onClick={() => setMenuOpen(false)}
              className={` ${menuOpen ? " font-semibold tracking-wide flex  h-1/5 aling-center items-center justify-end py-3 sm:py-0 bg-[#8b6ad9] text-[#fff4fa] hover:text-[#fff4fa]" : "flex h-full items-center justify-center py-3 sm:py-0 hover:bg-[#9c8fe8] hover:text-[#fff4fa] font-semibold tracking-wide hover:border-white hover:border-[2px] "}`}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
