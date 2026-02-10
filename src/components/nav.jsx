import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react"

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
      ${scrolled ? "bg-[#c96928]" : "bg-transparent"}`}
    >
      {/* Header */}
      <div className="flex h-11 items-center justify-between px-4 sm:hidden">
        <span className="text-black">Logo</span>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-[#ee9c21] text-2xl"
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
              className={` ${menuOpen ? "flex  h-1/5 aling-center items-center justify-end py-3 sm:py-0 bg-[#ee9c21] text-[#e9d7a5]" : "flex h-full items-center justify-center py-3 sm:py-0 hover:bg-[#ee9c21] hover:text-[#e9d7a5]"}`}
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
