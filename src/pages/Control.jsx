import TablaIngresos from '../components/tablaIngresos'
import TablaGastos from '../components/tablaGastos.jsx'
import { useEffect, useState } from "react";
import bannerControl from '../assets/bannerControl.png'

import { useUser } from "../context/userContext";
import { getSaldoById } from "../service/users.js";

import PieChartExpenses from '../dashboard/PieChartExpenses.jsx'

function Control() {

  const { user } = useUser(); // ← FALTABA ESTO

  const nombreMes = new Date().toLocaleString("es-AR", {
    month: "long"
  });

  const [saldo, setSaldo] = useState(0);

  useEffect(() => {

    const fetchSaldo = async () => {

      if (!user) return;

      const data = await getSaldoById(user.id);

      setSaldo(data); // ← antes decía setIngresos

    };

    fetchSaldo();

  }, [user]);

  return (
    <>
      <div className='h-auto  '>

        <div
          id="banner"
          className="pt-[50%]min-h-screen w-screen bg-cover sm:bg-center gap-10"
          style={{ backgroundImage: `url(${bannerControl})` }}
        >

          <div className="w-full h-[20vh] flex items-center justify-between px-10 pt-10 ">

  <h1 className="text-3xl font-bold">
    Control de gastos: {nombreMes.toUpperCase()}
  </h1>

  <div className="bg-white shadow-lg rounded-xl px-6 py-3 flex flex-col items-center border border-gray-200">

    <span className="text-sm text-gray-500">
      Saldo actual
    </span>

    <span className={`text-2xl font-bold ${saldo >= 0 ? "text-green-600" : "text-red-500"}`}>
      ${saldo}
    </span>

  </div>

</div>

          <div className="grid grid-cols-[40%_50%] w-screen h-auto place-content-center gap-10">

            <section className='gap-20'>
              <h2 className='text-center text-3xl'>Ingresos</h2>
              <TablaIngresos />
            </section>

            <section className="row-span-2">
              <h2 className='text-center text-3xl'>Gastos</h2>
              <TablaGastos />
            </section>

            <PieChartExpenses />

          </div>

        </div>

      </div>
    </>
  )
}

export default Control