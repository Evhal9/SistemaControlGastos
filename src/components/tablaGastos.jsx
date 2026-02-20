import { gastoss } from './datos'

function TablaGastos(){
const gastos = gastoss
 
    return(
        <>
           <div className="w-[100%] m-2 grid  grid-cols-1  border rounded-xl bg-[#cec0f5] ">
            <div className="flex w-[100%] flex-row p-3">
                <h3 className="font-bold w-[5%]  ">Nro</h3>
                <h3 className="font-bold text-center w-[15%]">Fecha</h3>
                <h3 className="font-bold w-[25%]  ">Descripción</h3>
                <h3 className="font-bold w-[20%]">Categoria</h3>
                <h3 className="font-bold w-[15%] text-left ">Metodo</h3>
                <h3 className="font-bold w-[15%] text-left ">Monto</h3>
            </div>
            
            {gastos.map((gasto) => (
                <div
                  key={gasto.id}
                  className="flex w-full flex-row p-2 border border-[#8b6ad9] hover:bg-[#9c8fe8] bg-[#fcfbff]"
                >
                  <p className="w-[5%]">{gasto.id}</p>
                  <p className="text-center w-[15%]">{gasto.fecha}</p>
                  <p className="w-[25%]">{gasto.descripcion}</p>
                  <p className="w-[20%]">{gasto.categoria}</p>
                  <p className="w-[15%]">{gasto.metodo}</p>
                  <p className="w-[15%] text-red-500">${gasto.monto}</p>
                  <button className="w-[2%] bg-white">rawr</button>
                  <button className="hidden w-[2%] bg-white">rawr</button>
                </div>
              ))}
            
        </div>
        </>
    )
}

export default TablaGastos;