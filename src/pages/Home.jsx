import banner from '../assets/banner2.avif'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from "react"

function Home() {
  const [showText, setShowText] = useState(false)
  useEffect(() => { setShowText(true)},[]);

    

  return (
    <>
      <div className="
        h-[80vh]
        bg-cover
        bg-center
        flex
        flex-col
        
        justify-center
        text-left
        gap-10" 
        style={{ backgroundImage: `url(${banner})` }}>
        <h3
          className={`text-5xl p-0 sm:pl-20 font-bold text-[#302f2f] sm:text-left text-center
            transition-all duration-1500 ease-out ${showText? "opacity-100 translate-y-0": "opacity-0 translate-y-6"}
        `}>
          ¡Controlá tus gastos
          <br />
          y mejorá tu economía personal!
        </h3>
        <div className='
            flex
            flex-col
            items-left
            justify-left
            text-center
            gap-7'> 
          <p className={` sm:text-3xl text-2xl font-sans italic text-[#f5bc2c]  max-w-xl
            transition-all delay-1200 duration-1500 ease-out ${showText? "opacity-100 translate-y-0": "opacity-0 translate-y-6"}
            `}>
           → Registrá tus gastos diarios </p>
          <p className={` sm:relative left-20 sm:text-3xl text-2xl font-sans italic text-[#ee9c21]  max-w-xl
            transition-all delay-1400 duration-1500 ease-out ${showText? "opacity-100 translate-y-0": "opacity-0 translate-y-6"}
`}>
            → Analizá tus consumos </p>
          <p className={`sm:relative left-60 sm:text-3xl text-2xl font-sans italic text-[#c96928]  max-w-xl
            transition-all delay-1700 duration-1500 ease-out ${showText? "opacity-100 translate-y-0": "opacity-0 translate-y-6"}
`}>
           → Tomá mejores decisiones financieras
           </p>
        </div>
        <div className='
            flex
            flex-col
            items-left
            justify-left
            text-center
            sm:pt-10
            pt-12
            
            '>
          <button  className=" sm:animate-pulse sm:hover:animate-bounce text-[#ba4226]  ">
            <NavLink to="/login"
            className=" sm:hover:animate-bounce  border-[#ba4226] border-2 rounded-2xl p-1 font-thin text-[#ba4226] p-2 hover:bg-[#ba4226] hover:text-[#e9d7a5] text-3xl  ">
            Empezar hoy
          </NavLink>
          </button>

        </div>
      </div>

      <div className="h-8"></div>
    </>
  );
}

export default Home;
