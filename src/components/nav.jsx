import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react"
import { useUser } from "../context/userContext"

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const { user, logout } = useUser()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const links = [
    { to: "/", label: "Inicio" },
    { to: "/Control", label: "Control" },
    { to: "/balance", label: "Balance" },
    { to: "/Qa", label: "QA" }
  ]

  if (!user) {
    links.push({ to: "/login", label: "Iniciar sesión" })
  }

  return (
    <nav
      className={`fixed top-0 left-0 w-screen z-50 transition-all ${
        scrolled ? "bg-[#8b6ad9]" : "bg-transparent"
      }`}
    >
      {/* Mobile header */}
      <div className="flex h-11 items-center justify-between w-screen px-4 sm:hidden">
        <span className="text-black font-bold">Logo</span>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-[#FFF4FA] text-2xl"
        >
          ☰
        </button>
      </div>

      <div className="flex justify-between items-center">

        {/* Menu */}
        <ul
          className={`flex flex-col sm:flex-row w-screen sm:h-11 ${
            menuOpen ? "block bg-[#8b6ad9]" : "hidden"
          } sm:flex`}
        >
          {links.map(({ to, label }) => (
            <li key={to} className="flex-1">
              <NavLink
                to={to}
                onClick={() => setMenuOpen(false)}
                className="flex h-full items-center justify-center py-3 sm:py-0 flex-1 font-semibold tracking-wide hover:bg-[#9c8fe8] hover:text-[#fff4fa] hover:border-white hover:border-[2px]"
              >
                {label}
              </NavLink>
            </li>
))}
        </ul>

        {/* Usuario */}
        {user && (
          <div className="hidden sm:flex flex-1 items-center gap-3 pr-4 text-white font-semibold">
            Hola {user.nombre}

            <button
              onClick={logout}
              className="bg-white flex-1 text-purple-600 px-3 py-1 rounded-lg hover:bg-gray-200"
            >
              Salir
            </button>
          </div>
        )}

      </div>
    </nav>
  )
}

export default Nav