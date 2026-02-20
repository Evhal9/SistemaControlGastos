import { ingresoss } from './datos'
function TablaIngresos() {
const ingresos = ingresoss
  return (
    <>
        <div className="w-[100%]  m-2 grid  grid-cols-1  border-[#f29bc1] border-2 rounded-xl bg-[#fadff2] #cec0f5">
            <div className="flex w-[100%] flex-row p-3 ">
                <h3 className="font-bold w-[5%]  ">Nro</h3>
                <h3 className="font-bold text-center w-[15%]">Fecha</h3>
                <h3 className="font-bold w-[40%]  ">Descripción</h3>
                <h3 className="font-bold w-[20%]">Método</h3>
                <h3 className="font-bold w-[15%] text-left ">Monto</h3>
            </div>
            
            {ingresos.map((ingreso) => (

                <div className="flex w-[100%] flex-row p-2 border-1 border-[#f29bc1] hover:bg-[#fadff2] bg-[#fcfbff] ">
                    <p key={`id-${ingreso.id}`} className=" w-[5%]">{ingreso.id}</p>
                    <p className=" text-center  w-[15%]">{ingreso.fecha}</p>
                    <p className=" w-[40%] ">{ingreso.descripcion}</p>
                    <p className=" w-[20%]">{ingreso.metodo}</p>
                    <p className="w-[15%]  text-green-500">${ingreso.monto}</p>
                    <button className="  w-[2%] bg-white ">rawr</button>
                    <button className="hidden w-[2%] bg-white ">rawr</button>
                </div>

            ))}
            
        </div>
    </>
  )
}

export default TablaIngresos
