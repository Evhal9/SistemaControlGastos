import TablaIngresos from '../components/tablaIngresos'
import TablaIngresos from '../components/tablaGastos.jsx'

function Control() {
  return (
    <>
        <h1 className="w-screen h-[20vh] text-center text-bold text-3xl pt-[5%]" > Control de gastos </h1>
      <div className="grid grid-cols-[40%_40%] w-screen justify-place-between ">
        
          <TablaIngresos/>
          <TablaGastos/>  

        <div>  </div>
      </div>
    </>
  )
}

export default Control
