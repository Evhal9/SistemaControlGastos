import { Trash2, Pencil } from "lucide-react";
import { ingresoss } from "./datos";

function TablaIngresos() {
  const ingresos = ingresoss;

  return (
    <div className="w-full m-2 grid grid-cols-1 border-2 border-[#f29bc1] rounded-xl bg-[#fadff2]">

      {/* HEADER */}
      <div className="flex w-full flex-row p-3 bg-[#f8c8e0] rounded-t-xl">
        <h3 className="font-bold w-[5%]">Nro</h3>
        <h3 className="font-bold text-center w-[15%]">Fecha</h3>
        <h3 className="font-bold w-[40%]">Descripción</h3>
        <h3 className="font-bold w-[20%]">Método</h3>
        <h3 className="font-bold w-[15%] text-left">Monto</h3>
        <div className="w-[5%]"></div>
      </div>

      {/* FILAS */}
      {ingresos.map((ingreso) => (
        <div
          key={ingreso.id}
          className="group flex w-full flex-row items-center p-2 border-t border-[#f29bc1] bg-[#fcfbff] hover:bg-[#fadff2] transition duration-200"
        >
          <p className="w-[5%]">{ingreso.id}</p>
          <p className="text-center w-[15%]">{ingreso.fecha}</p>
          <p className="w-[40%]">{ingreso.descripcion}</p>
          <p className="w-[20%]">{ingreso.metodo}</p>
          <p className="w-[15%] text-green-500 font-medium">
            ${ingreso.monto}
          </p>

          {/* ICONOS (aparecen en hover) */}
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

export default TablaIngresos;