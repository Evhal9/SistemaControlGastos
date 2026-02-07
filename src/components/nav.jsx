import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <nav className="fixed top-0 left-0 w-screen h-11 bg-[#a2d2ff]">
      <ul className="flex h-full">
        <li className="flex-1">
          <NavLink
            to="/"
            className="flex h-full w-full items-center justify-center font-light text-center hover:bg-[#bde0fe] hover:text-[#ffafcc]"
          >
            Inicio
          </NavLink>
        </li>

        <li className="flex-1">
          <NavLink
            to="/control"
            className="flex h-full w-full items-center justify-center font-light text-center hover:bg-[#bde0fe] hover:text-[#ffafcc]"
          >
            Control
          </NavLink>
        </li>

        <li className="flex-1">
          <NavLink
            to="/balance"
            className="flex h-full w-full items-center justify-center font-light text-center hover:bg-[#bde0fe] hover:text-[#ffafcc]"
          >
            Balance
          </NavLink>
        </li>

        <li className="flex-1">
          <NavLink
            to="/qa"
            className="flex h-full w-full items-center justify-center font-light text-center hover:bg-[#bde0fe] hover:text-[#ffafcc]"
          >
            QA
          </NavLink>
        </li>

        <li className="flex-1">
          <NavLink
            to="/login"
            className="flex h-full w-full items-center justify-center font-light text-center hover:bg-[#bde0fe] hover:text-[#ffafcc]"
          >
            Iniciar sesión
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
