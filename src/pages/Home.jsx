import banner from '../assets/banner.jpg'
import img1 from '../assets/img1.jfif'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from "react"

function Home() {
  const [showText, setShowText] = useState(false);
  useEffect(() => {
  const timer = setTimeout(() => {
    setShowText(true);
  }, 50); // 50ms es suficiente

  return () => clearTimeout(timer);
}, []);

  

    

  return (
    <>
      <div className="
        min-h-[80vh]
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
          className={`sm:text-5xl text-3xl pl-5 sm:pl-20 font-bold text-[#302f2f] sm:text-left text-center absolute top-[-33vh]
             transition-all duration-1500 ease-out ${showText? "opacity-100 translate-y-0": "opacity-0 translate-y-6" }`}>
          ¡Controlá tus gastos
          <br />
          y mejorá tu economía personal!
        </h3></div>
      </div>

        <section className="absolute  w-screen
        h-60 bottom-[2.5vh]
              bg-gradient-to-b 
               from-transparent from-0%
               via-[#f7d6e8] via-20%
               to-[#fff4fa] to-60%
               sm:flex-col flex-row
              items-center"></section>

<div className='
  sm:h-40

  flex
  flex-col
  sm:flex-row
  items-center
  sm:justify-between
  justify-center
  
  bg-[#fff4fa]
'>
  {[
    {content:"✧ Registrá tus gastos diarios", css:"delay-1200 sm:ml-10 from-[#6fd1d8] from-10% to-[#7C9FF2] "},
    {content: "✧ Analizá tus consumos", css:"delay-1400  from-[#7C9FF2] to-[#8B6AD9]"},
    {content: "✧ Tomá mejores  decisiones financieras", css:"delay-1900 sm:mr-10   from-[#8B6AD9] to-[#9C8FE8]"},
  ].map(({content,css}) =>(
    <h4 
      key={content}
      className={`
        ${css}
        sm:h-full
        text-center
        transition-all duration-1500 ease-out
        mb-15 text-3xl sm:text-5xl font-bold tracking-wide
        sm:w-[33%]
        bg-gradient-to-r  bg-clip-text text-transparent
        ${showText? "opacity-100 translate-y-0": "opacity-0 translate-y-6"}
      `} style={{fontFamily: "Gowun Dodum, sans-serif"}}
       
    >
      {content}
    </h4>
  ))}
</div>
          

 

      
        <div className='
            flex
            flex-col
            items-left
            justify-left
            text-center
            
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
