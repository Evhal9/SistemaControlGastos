import TablaIngresos from '../components/tablaIngresos'
import TablaGastos from '../components/tablaGastos.jsx'
import bannerControl from '../assets/bannerControl.png'

function Control() {
  return (
    <>
   <div id="banner" className=" pt-[50%]min-h-screen w-screen bg-cover sm:bg-center  gap-10  " 
                style={{ backgroundImage:  `url(${bannerControl})`  }}>
      <h1 className="w-screen h-[20vh] text-center text-bold text-3xl pt-[5%]" > Control de gastos </h1>
      <div className="grid w-scren grid-cols-[40%_50%] w-screen  place-content-center gap-[5%] ">
        
          <TablaIngresos/>
          <TablaGastos/>  

        <div>  </div>
      </div>
    </div>
    </>
  )
}

export default Control
