import { NavLink } from 'react-router-dom'


function Nav() {
  return (
    <nav className= "flex fixed justify-between w-full">
      <ul  className= "flex fixed justify-between flex-row bg-[#a2d2ff] items-center w-full" >
        <li>
          <NavLink to="/" className="font-light  ml-6 text-center hover:bg-[#bde0fe]  hover:text-[#ffafcc]">Inicio</NavLink>
        </li>

        <li>
          <NavLink to="/control" className="font-light text-center hover:bg-[#bde0fe] hover:text-[#ffafcc]">Control</NavLink>
        </li>

        <li>
          <NavLink to="/balance" className="font-light text-center hover:bg-[#bde0fe] hover:text-[#ffafcc]">Balance</NavLink>
        </li>

        <li>
          <NavLink to="/qa" className="font-light text-center hover:bg-[#bde0fe] hover:text-[#ffafcc]">QA</NavLink>
        </li>

        <li>
          <NavLink to="/login" className="font-light  mr-6 text-center hover:bg-[#bde0fe] hover:text-[#ffafcc]">Iniciar sesión</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
