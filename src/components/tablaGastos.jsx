function TablaGastos(){

 const gastos = [
  {
    id: 1,
    fecha: "2026-01-02",
    descripcion: "Supermercado",
    categoria: "Alimentación",
    metodo: "Tarjeta de débito",
    monto: 45200
  },
  {
    id: 2,
    fecha: "2026-01-06",
    descripcion: "Abono transporte",
    categoria: "Transporte",
    metodo: "Tarjeta SUBE",
    monto: 18000
  },
  {
    id: 3,
    fecha: "2026-01-10",
    descripcion: "Factura de luz",
    categoria: "Servicios",
    metodo: "Transferencia",
    monto: 12500
  },
  {
    id: 4,
    fecha: "2026-01-14",
    descripcion: "Cena con amigos",
    categoria: "Ocio",
    metodo: "Tarjeta de crédito",
    monto: 22000
  },
  {
    id: 5,
    fecha: "2026-01-18",
    descripcion: "Suscripción Netflix",
    categoria: "Suscripciones",
    metodo: "Tarjeta de crédito",
    monto: 7500
  },
  {
    id: 6,
    fecha: "2026-01-22",
    descripcion: "Farmacia",
    categoria: "Salud",
    metodo: "Efectivo",
    monto: 9800
  },
  {
    id: 7,
    fecha: "2026-01-27",
    descripcion: "Compra ropa",
    categoria: "Compras",
    metodo: "Tarjeta de débito",
    monto: 36500
  },
  {
    id: 8,
    fecha: "2026-02-03",
    descripcion: "Internet",
    categoria: "Servicios",
    metodo: "Transferencia",
    monto: 15000
  }
];

    return(
        <>
           <div className="w-[100%] m-2 grid  grid-cols-1  border rounded-xl bg-[#8b6ad9]/50">
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
                  className="flex w-full flex-row p-2 border border-[#8b6ad9] hover:bg-[#9c8fe8]"
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