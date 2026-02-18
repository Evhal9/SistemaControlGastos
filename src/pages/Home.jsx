import banner from '../assets/banner.jpg'
import img1 from '../assets/lineasfondo.png'
import card from '../assets/card.jpg'
import grid1 from '../assets/grid1.png'
import grid2 from '../assets/grid2.png'
import grid3 from '../assets/grid3.png'
import grid4 from '../assets/grid4.png'
import usingAlme from '../assets/usingAlme.png'


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

      <div id="cards" className=" h-auto w-screen justify-center align-center gap-2 flex flex-col bg-[#fff4fa] bg-cover" style={{  }}>
        <h4 className=" w-screen text-center text-[#474747] text-4xl">Beneficios de usar Alme</h4>
        <div className="grid grid-cols-2 grid-rows-2 gap-12">
      {[
          {contenth4:"Registrá tus gastos",contentp:" Anotá cada gasto en segundos y mantené todo organizado por fecha y categoría. ",imgen: grid1},
          {contenth4:"Control diario y mensual",contentp:"Visualizá cuánto gastás por día, semana o mes sin hacer cuentas a mano.",imgen:grid2},
          {contenth4:"Entendé tus hábitos",contentp:"Detectá en qué se va tu dinero y descubrí oportunidades para ahorrar. ", imgen:grid3},
          {contenth4:"Mantené el control",contentp:"Evitá sorpresas a fin de mes con un seguimiento claro de tus consumos.", imgen:grid4},
      ].map(({contenth4,contentp, imgen}) =>(
        <div className='sm:m-12 flex items-center justify-items-center flex-row bg-cover gap-2 rounded-3xl border-2 border-[#f29bc1] hover:border-[#5a8cf2] hover:scale-[105%] transition-all ' style={{ backgroundImage:  `url(${card})`  }} >
          <img src={imgen} alt="" className='sm:h-[30vh] sm:w-[20vw] h-[40vh] w-[30vw] rounded-tr-full
          rounded-br-full bg-[#fff4fa]'/>
          <div className=" flex flex-col align-center justify-center gap-10 text-center h-[100%]">
            <h4 className="text-2xl text-semibold">{contenth4} </h4>
            <p> {contentp} </p>
          </div>
        </div>
      ))}

</div>
      </div>

      <div id="bullets" className='flex bg-[#fff4fa] m-9 justify-center align-center flex-row  '>
      {[
      {content:"App facil de usar", colorBg:"bg-[#f7d6e8] border-[#f29bc1] text-[#474747]", border:" border-r-0 "},
      {content:"Accesible desde cualquier dispositivo", colorBg:"bg-[#9c8fe8] border-[#8b6ad9] text-[#ffffff]", border:"border-r-0 border-l-0"},
      {content:"Informacion clara y visual", colorBg:"bg-[#6fd1d8] border-[#66c6b9] text-[#ffffff]", border:"border-r-0 border-l-0"},
      {content:"Ideal para el dia a dia", colorBg:"bg-[#ffdb78] border-[#f6c453] text-[#474747]", border:"border-l-0"},]
      .map(({content,colorBg,border})=>(
        <section className={` flex-1 ${colorBg} border-dashed border-3 ${border} justify-center align-center hover:border-double hover:scale-[104%] hover: transition-all`}>
          <p className="text-3xl text-center h-[100%] ">{content}</p> 
        </section>
      ))}
      
      </div>

      <div className="relative" >
        <div className="flex flex-col w-screen h-[90vh] align-center justify-center  " > 
          <div className="w-[100%]  h-2/7 bg-[#f8bff1] text-center flex flex-col align-center justify-center items-center">
            <h3 className=" text-3xl" > Pensada para personas reales</h3>
            <p> Diseñada para personas que quieren tener el control de sus gatos sin planillas complicadas ni sistemas dificiles de usar</p>
          </div>
          <p className="w-[100%] h-1/7 bg-[#eaadeb]  pl-[80%] text-center text-3xl" > ¿Para quien es?</p>
          <p className="w-[100%]  h-1/7 bg-[#d09ce2] text-white text-right pr-[5%]"> Estudiantes</p>
          <p className="w-[100%]  h-1/7 bg-[#a07cd1] text-white text-right  pr-[5%]"> Personas que quieren empezar a ahorrar</p>
          <p className="w-[100%]  h-1/7 bg-[#906cc8] text-white text-right pr-[5%]"> Personas que quieren organizar sus gastos personales</p>
          <p className="w-[100%]  h-1/7 bg-[#7c5bba] text-white text-right pr-[5%]">Cualquiera que quiera saber en que se va su plata </p>
          <img src={usingAlme} alt="" className="h-[100%] w-[30%] absolute top-0 rounded-tr-full rounded-br-full"  />
        </div>
      </div>
    </>
  );
}

export default Home;
