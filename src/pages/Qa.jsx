import { useState } from "react";
import banner from '../assets/bannerQa.png'

function Qa() {
  const [activeIndex, setActiveIndex] = useState(null);

  const items = [
    {
      title: "¿Qué es esta aplicación?",
      content: "Es una herramienta para registrar y organizar tus gastos diarios de forma simple. Te ayuda a entender en qué se va tu dinero y a tomar mejores decisiones financieras."
    },
    {
      title: "¿Para quién está pensada?",
      content: "Está pensada para cualquier persona que quiera ordenar sus gastos personales: estudiantes, trabajadores, freelancers o cualquier persona que quiera tener mayor control de su dinero. "
    },
    {
      title: "¿Es difícil de usar?",
      content: "No. La aplicación fue diseñada para ser intuitiva. Podés registrar un gasto en pocos segundos y visualizar tu información sin complicaciones."
    },
    {
        title:"¿Qué tipo de gastos puedo registrar?",
        content:"Podés registrar cualquier gasto: comida, transporte, servicios, ocio, compras, suscripciones y más. También podés organizarlos por categorías."
    },
    {
        title:"¿Puedo ver cuánto gasto por mes?",
        content:"Sí. Podés visualizar tus gastos diarios, semanales y mensuales, lo que te permite tener una visión clara de tu economía."
    },
    {
        title:"¿Mis datos están seguros?",
        content:"Sí. Tu información es privada y solo vos podés acceder a ella. La aplicación no comparte tus datos con terceros."
    },
    {
        title:"¿Funciona desde el celular?",
        content:"Sí. La aplicación es completamente responsive, por lo que podés usarla desde tu celular, tablet o computadora sin inconvenientes."
    },
    {
        title:"¿Necesito conexión a internet para usarla?",
        content:"Sí, necesitás conexión para guardar y sincronizar tus datos correctamente en tu cuenta."
    },
    {
        title:"¿Puedo editar o eliminar un gasto?",
        content:"Sí. Podés modificar o eliminar cualquier registro en cualquier momento si cometiste un error o querés actualizar la información."
    },
    {
        title:"¿Tiene algún costo?",
        content:"Actualmente la aplicación puede utilizarse de forma gratuita. En el futuro podrían incorporarse funciones adicionales opcionales."
    },
  ];

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
   
        <div id="banner" className=" pt-[50%]
                min-h-[80vh] w-screen bg-cover sm:bg-center  gap-10  " 
            style={{ backgroundImage:  `url(${banner})`  }}> </div>
    <div className="w-screen bg-[#fff4fa]">   
        <div className="max-w-2xl mx-auto space-y-4 pt-2 pb-2 bg-[#fff4fa]">
        {items.map((item, index) => (
            <div key={index} className="border-2 border-[#5a8cf2] hover:border-[#f29bc1] rounded-xl overflow-hidden">
            
            {/* Header */}
            <button
                onClick={() => toggle(index)}
                className="w-full text-left p-4 bg-[#978fe0] hover:bg-white flex justify-between items-center"
            >
                <span className="font-semibold">{item.title}</span>
                <span className="text-xl">
                {activeIndex === index ? "−" : "+"}
                </span>
            </button>

 
            <div
                className={`bg-white
                transition-all duration-500 ease-in-out overflow-hidden
                ${activeIndex === index ? "max-h-40 p-4" : "max-h-0"}
                `}
            >
                <p className="text-gray-600  ">{item.content}</p>
            </div>

            </div>
        ))}
        </div></div>
 </> );
}


export default Qa;