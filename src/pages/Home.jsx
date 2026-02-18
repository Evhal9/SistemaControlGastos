import banner from '../assets/banner.jpg'
import img1 from '../assets/img1.png'
import card from '../assets/card.jpg'
import grid1 from '../assets/grid1.png'
import grid2 from '../assets/grid2.png'
import grid3 from '../assets/grid3.png'
import grid4 from '../assets/grid4.png'

import { useEffect, useState } from "react"

function Home() {
  const [showText, setShowText] = useState(false);
 
  useEffect(() => {
  const timer = setTimeout(() => {
    setShowText(true);
  }, 50); 

  return () => clearTimeout(timer);
}, []);

  return (
    <>
      <div id="banner" className=" relative top-[-3vh]
        min-h-[90vh] w-auto bg-cover sm:bg-center gap-10  " 
      style={{ backgroundImage:  `url(${banner})`  }}>
          <h3 
            className={` absolute md:text-5xl text-3xl text-[#302f2f]  text-center  w-screen top-[12vh]
              transition-all duration-1500 ease-out ${showText? "opacity-100 translate-y-[-10px}": "opacity-0 translate-y-150" }` }  style={{fontFamily: "Abhaya Libre",  fontWeight: 700}}>
            ¡Controlá tus gastos
            y mejorá tu economía personal!
          </h3>
      </div>

        <section id="transition" className="absolute  w-screen
              h-30 bottom-[2.5vh]
              bg-gradient-to-b 
               from-transparent from-0%
               via-[#f7d6e8] via-20%
               to-[#fff4fa] to-60%
               sm:flex-col flex-row
               items-center"></section>

        <div className='
          md:h-50 flex flex-col sm:flex-row items-center sm:justify-between justify-center bg-[#fff4fa]'>
          {[
            {content:"✧ Registrá tus gastos diarios", css:"delay-1200 md:ml-10 "},
            {content: "✧ Analizá tus consumos", css:"delay-1400 "},
            {content: "✧ Tomá mejores  decisiones financieras", css:"delay-1900 md:mr-10"},
            ].map(({content,css}) =>(
            <h4 
              key={content}
              className={`
                ${css}
                sm:h-full
                flex-1
                text-center
                transition-all duration-1500 ease-out
               text-3xl md:text-4xl 
                text-[#474747]
                ${showText? "opacity-100 translate-y-0": "opacity-0 translate-y-6"}
              `} style={{fontFamily: "Arimo"}}
              
            >
              {content}
            </h4>
          ))}
        </div>

      <div className=" h-auto w-screen flex flex-row bg-[#fff4fa]">
        <div className='bg-[#fff4fa] h-auto w-[30vw] sm:block hidden'>
           
        </div>
        <div className="sm:w-[100%] h-auto grid sm:gap-10 sm:grid-cols-2  grid-cols-1 sm:grid-rows-3 grid-rows-[30vw_auto] place-items-center justify-items-center">
          <h4 className="sm:col-span-2 sm:text-5xl text-3xl font-bold text-center text-[#302f2f] justify-center  ">Beneficios de usar Alme</h4>
      {[
          {contenth4:"Registrá tus gastos",contentp:" Anotá cada gasto en segundos y mantené todo organizado por fecha y categoría. ",imgen: grid1},
          {contenth4:"Control diario y mensual",contentp:"Visualizá cuánto gastás por día, semana o mes sin hacer cuentas a mano.",imgen:grid2},
          {contenth4:"Entendé tus hábitos",contentp:"Detectá en qué se va tu dinero y descubrí oportunidades para ahorrar. ", imgen:grid3},
          {contenth4:"Mantené el control",contentp:"Evitá sorpresas a fin de mes con un seguimiento claro de tus consumos.", imgen:grid4},
      ].map(({contenth4,contentp, imgen}) =>(
        <div className='flex items-center justify-items-center flex-col bg-cover gap-4 sm:w-[20vw] rounded-3xl border-2 border-black ' >
          <img src={imgen} alt="" className='sm:h-[30vh] sm:w-[40vw] h-[40vh] w-[30vw] '/>
          <h4>{contenth4} </h4>
          <p> {contentp} </p>
        </div>
      ))}

</div>
      </div>
    </>
  );
}

export default Home;
