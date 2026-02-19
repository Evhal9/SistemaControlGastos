function TablaIngresos() {
const ingresos = [
    {
        id: 1,
        fecha: "2026-01-05",
        descripcion: "Sueldo mensual",
        categoria: "Salario",
        metodo: "Transferencia",
        monto: 350000
    },
    {
        id: 2,
        fecha: "2026-01-12",
        descripcion: "Trabajo freelance - Diseño web",
        categoria: "Freelance",
        metodo: "Transferencia",
        monto: 85000
    },
    {
        id: 3,
        fecha: "2026-01-15",
        descripcion: "Venta de ropa usada",
        categoria: "Ventas",
        metodo: "Efectivo",
        monto: 25000
    },
    {
        id: 4,
        fecha: "2026-01-20",
        descripcion: "Reembolso de gastos",
        categoria: "Reintegro",
        metodo: "Transferencia",
        monto: 18000
    },
    {
        id: 5,
        fecha: "2026-01-28",
        descripcion: "Clases particulares",
        categoria: "Servicios",
        metodo: "Efectivo",
        monto: 40000
    },
    {
        id: 6,
        fecha: "2026-02-05",
        descripcion: "Sueldo mensual",
        categoria: "Salario",
        metodo: "Transferencia",
        monto: 350000
    },
    {
        id: 7,
        fecha: "2026-02-10",
        descripcion: "Proyecto freelance - Landing page",
        categoria: "Freelance",
        metodo: "Transferencia",
        monto: 95000
    }
]
  return (
    <>
        <div className="w-[100%]  m-2 grid  grid-cols-1  border rounded-xl bg-[#f29bc1]/60">
            <div className="flex w-[100%] flex-row p-3">
                <h3 className="font-bold w-[5%]  ">Nro</h3>
                <h3 className="font-bold text-center w-[15%]">Fecha</h3>
                <h3 className="font-bold w-[40%]  ">Descripción</h3>
                <h3 className="font-bold w-[20%]">Método</h3>
                <h3 className="font-bold w-[15%] text-left ">Monto</h3>
            </div>
            
            {ingresos.map((ingreso) => (

                <div className="flex w-[100%] flex-row p-2 border-1 border-[#f29bc1] hover:bg-[#f7d6e8] ">
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
