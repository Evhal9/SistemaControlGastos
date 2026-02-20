import TablaIngresos from '../components/tablaIngresos'
import TablaGastos from '../components/tablaGastos.jsx'
import bannerControl from '../assets/bannerControl.png'

import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer} from 'recharts'

import PieChartExpenses from '../dashboard/PieChartExpenses.jsx'

function Control() {
  const nombreMes = new Date().toLocaleString("es-AR", {
  month: "long"
});
  
  return (
    <>
    <div className='h-auto' >
    
   <div id="banner" className=" pt-[50%]min-h-screen w-screen bg-cover sm:bg-center  gap-10  " 
                style={{ backgroundImage:  `url(${bannerControl})`  }}>
      <h1 className="w-screen h-[20vh] text-bold text-3xl pt-[5%] pl-10 flex flex-row" > Control de gastos: <p className="w-[70%]  text-center " >{nombreMes.toUpperCase()}</p> </h1>
      <div className="grid w-scren grid-cols-[40%_50%] w-screen h-auto place-content-center gap-10 ">
          <section className='gap-20' >
            <h2 className='text-center text-3xl '>Ingresos</h2>
            <TablaIngresos/>
            <button className='bg-green-700 m-2 hover:bg-green-600 h-[10%] text-white rounded-3xl p-2'> Registrar ingreso</button>
            
          </section>
          
          <section className="row-span-2">
          <h2 className='text-center text-3xl '> Gastos</h2>
          <TablaGastos/>
          <button className='bg-red-500 hover:bg-red-600 h-[10%] text-white rounded-3xl p-2'> Registrar gasto</button>
           
          </section>
         <PieChartExpenses/>
      </div>
    </div>
    </div>
    </>
  )
}

export default Control
