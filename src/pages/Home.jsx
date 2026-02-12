import banner from '../assets/banner.jpg'
import img1 from '../assets/img1.jfif'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from "react"

function Home() {
  const [showText, setShowText] = useState(false)
  useEffect(() => { setShowText(true)},[]);

  

    

  return (
    <>
      <div className="
        h-[85vh]
        w-auto
        bg-cover
        bg-center
        flex
        flex-col
        top-10
        justify-center
        text-left
        gap-10 " 
      style={{ backgroundImage: `url(${banner})` }}>
      <div className="relative">
        <h3 
          className={`text-5xl p-0 sm:pl-20 font-bold text-[#302f2f] sm:text-left text-center absolute top-[-290px]
             transition-all duration-1500 ease-out ${showText? "opacity-100 translate-y-0": "opacity-0 translate-y-6" }`}>
          ¡Controlá tus gastos
          <br />
          y mejorá tu economía personal!
        </h3></div>
      </div>

        <div className='
            flex
            flex-row
            items-left
            w-screen
            items-center
            text-center
            '> 
            <section className='relative sm:w-1/3  '>
              <p className={` h-50  absolute w-[100%] top-[-250px] rounded-tr-3xl
               bg-gradient-to-b 
               from-transparent from-0%
               via-[#f7d6e8] via-20%
               to-[#fff4fa] to-60%
            transition-all delay-1200 duration-1500 ease-out ${showText? "opacity-100 translate-y-0": "opacity-0 translate-y-6"}
            `}>
            → Registrá tus gastos diarios </p>
            </section>
            <section className='relative sm:w-1/3  '>
              <p className={` h-50 bg-[#6fd1d8] border-1 border-black
            transition-all delay-1400 duration-1500 ease-out ${showText? "opacity-100 translate-y-0": "opacity-0 translate-y-6"}
`}>         
            → Analizá tus consumos </p>
            </section>
            <section className='relative sm:w-1/3 '>
               <p className={` h-50 bg-[#6fd1d8] border-1 border-black
            transition-all delay-1700 duration-1500 ease-out ${showText? "opacity-100 translate-y-0": "opacity-0 translate-y-6"}
`}>
           → Tomá mejores decisiones financieras
           </p>
            </section>
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
            className="  hidden  sm:hover:animate-bounce  border-[#ba4226] border-2 rounded-2xl p-1 font-thin text-[#ba4226] p-2 hover:bg-[#ba4226] hover:text-[#e9d7a5] text-3xl  ">
            Empezar hoy
          </NavLink>
          </button>

        </div>
      <div className=" flex flex-row gap-8 bg-[#94d2bd]">
            <section className="sm:block hidden  bg-[#94d2bd] rounded-4xl  bg-cover top-140 right-[5] h-150 w-150" style={{ backgroundImage: `url(${img1})` }}></section>

        <div>
        <h3> Beneficios de usar Alme</h3>
        <div className=" flex flex-row gap-5">
            <secction className=" flex flex-col" >
              <h4>Registrá tus gastos</h4>
              <p>Anotá cada gasto en segundos y mantené todo organizado por fecha y categoría. </p>
            </secction>
            <secction className=" flex flex-col" >
              <h4>Control diario y mensual</h4>
              <p>Visualizá cuánto gastás por día, semana o mes sin hacer cuentas a mano.</p>
            </secction>
            <secction className=" flex flex-col" >
              <h4>Entendé tus hábitos</h4>
              <p>Detectá en qué se va tu dinero y descubrí oportunidades para ahorrar.</p>
            </secction>
            <secction className=" flex flex-col" >
              <h4>Mantené el control </h4>
              <p>Evitá sorpresas a fin de mes con un seguimiento claro de tus consumos.</p>
            </secction>
        </div>    
      </div>
      </div>
    </>
  );
}

export default Home;
