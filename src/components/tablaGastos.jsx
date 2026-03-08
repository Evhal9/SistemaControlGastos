import { Trash2, Pencil } from "lucide-react";
import { gastoss } from "./datos";

function TablaGastos() {
  const gastos = gastoss;

  return (
    <div className="w-full m-2 grid grid-cols-1 border-2 border-[#8b6ad9] rounded-xl bg-[#cec0f5]">

      {/* HEADER */}
      <div className="flex w-full flex-row p-3 bg-[#bba7f2] rounded-t-xl">
        <h3 className="font-bold w-[5%]">Nro</h3>
        <h3 className="font-bold text-center w-[15%]">Fecha</h3>
        <h3 className="font-bold w-[25%]">Descripción</h3>
        <h3 className="font-bold w-[20%]">Categoría</h3>
        <h3 className="font-bold w-[15%]">Método</h3>
        <h3 className="font-bold w-[15%] text-left">Monto</h3>
        <div className="w-[5%]"></div>
      </div>

      {/* FILAS */}
      {gastos.map((gasto) => (
        <div
          key={gasto.id}
          className="group flex w-full flex-row items-center p-2 border-t border-[#8b6ad9] bg-[#fcfbff] hover:bg-[#9c8fe8]/40 transition duration-200"
        >
          <p className="w-[5%]">{gasto.id}</p>
          <p className="text-center w-[15%]">{gasto.fecha}</p>
          <p className="w-[25%]">{gasto.descripcion}</p>
          <p className="w-[20%]">{gasto.categoria}</p>
          <p className="w-[15%]">{gasto.metodo}</p>
          <p className="w-[15%] text-red-500 font-medium">
            ${gasto.monto}
          </p>

          {/* ICONOS HOVER */}
          <div className="flex gap-3 w-[5%] justify-end opacity-0 group-hover:opacity-100 transition duration-200">
            
            <button className="text-blue-500 hover:text-blue-700 transition">
              <Pencil size={18} />
            </button>

            <button className="text-red-500 hover:text-red-700 transition">
              <Trash2 size={18} />
            </button>

          </div>
        </div>
      ))}
    </div>
  );
}

export default TablaGastos;