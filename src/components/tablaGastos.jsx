import { Trash2, Pencil } from "lucide-react";
import { useEffect, useState } from "react";
import { useUser } from "../context/userContext";
import { ModalForm } from "./modalForm";

import {
  getExpensesByUser,
  createExpense,
  updateExpense,
  deleteExpense,
} from "../service/expense";

function TablaGastos() {
  const { user } = useUser();

  const [gastos, setGastos] = useState([]);
  const [creatingGasto, setCreatingGasto] = useState(false);

  const [editingGasto, setEditingGasto] = useState(null);
  const [deletingGasto, setDeletingGasto] = useState(null);

  const [formData, setFormData] = useState({
    descripcion: "",
    categoria: "",
    metodo: "",
    monto: 0,
  });

  // CARGAR GASTOS
  useEffect(() => {
    const fetchExpenses = async () => {
      if (!user) return;

      const data = await getExpensesByUser(user.id);
      setGastos(data);
    };

    fetchExpenses();
  }, [user]);

  // INPUTS
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: name === "monto" ? Number(value) : value,
    });
  };

  // CREAR GASTO
  const handleCreateSubmit = async (e) => {
  e.preventDefault();

  try {
    await createExpense(user.id, formData);

    const data = await getExpensesByUser(user.id);
    setGastos(data);

    setFormData({
      descripcion: "",
      categoria: "",
      metodo: "",
      monto: 0,
    });

    setCreatingGasto(false);

  } catch (error) {
    console.error(error);
  }
};

  // ABRIR MODAL EDITAR
  const openEditModal = (gasto) => {
    setEditingGasto(gasto);

    setFormData({
      descripcion: gasto.descripcion,
      categoria: gasto.categoria,
      metodo: gasto.metodo,
      monto: gasto.monto,
    });
  };

  // EDITAR
  const handleEditSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateExpense(user.id, editingGasto.id, formData);

      const nuevos = gastos.map((g) =>
        g.id === editingGasto.id ? { ...g, ...formData } : g
      );

      setGastos(nuevos);
      setEditingGasto(null);
    } catch (error) {
      console.error(error);
    }
  };

  // ELIMINAR
  const handleDelete = async () => {
    try {
      await deleteExpense(user.id, deletingGasto.id);

      const nuevos = gastos.filter((g) => g.id !== deletingGasto.id);

      setGastos(nuevos);
      setDeletingGasto(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {/* TABLA */}
      <div className="w-full grid grid-cols-1 border-2 border-[#8b6ad9] rounded-xl bg-[#efe9ff]">

        {/* HEADER */}
        <div className="flex p-3 bg-[#dcd2ff] rounded-t-xl">
          <p className="w-[5%] font-bold">#</p>
          <p className="w-[20%] font-bold">Fecha</p>
          <p className="w-[30%] font-bold">Descripción</p>
          <p className="w-[20%] font-bold">Categoría</p>
          <p className="w-[15%] font-bold">Monto</p>
          <div className="w-[10%]" />
        </div>

        {gastos.map((gasto) => (
          <div
            key={gasto.id}
            className="group flex p-2 border-t bg-white hover:bg-[#f4f1ff]"
          >
            <p className="w-[5%]">{gasto.id}</p>
            <p className="w-[20%]">{gasto.fecha}</p>
            <p className="w-[30%]">{gasto.descripcion}</p>
            <p className="w-[20%]">{gasto.categoria}</p>

            <p className="w-[15%] text-red-500 font-medium text-left">
              ${gasto.monto}
            </p>

            <div className="flex gap-3 w-[10%] justify-end opacity-0 group-hover:opacity-100 transition">

              <button
                onClick={() => openEditModal(gasto)}
                className="text-blue-500 hover:text-blue-700"
              >
                <Pencil size={18} />
              </button>

              <button
                onClick={() => setDeletingGasto(gasto)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 size={18} />
              </button>

            </div>
          </div>
        ))}
      </div>

      {/* BOTON AGREGAR */}
      <div className="flex justify-end mt-4">
        <button
          onClick={() => {
            setFormData({
              descripcion: "",
              categoria: "",
              metodo: "",
              monto: 0,
            });
            setCreatingGasto(true);
          }}
          className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
        >
          + Agregar gasto
        </button>
      </div>

      {/* MODAL CREAR */}
      {creatingGasto && (
        <ModalForm
          title="Agregar gasto"
          formData={formData}
          handleChange={handleChange}
          onSubmit={handleCreateSubmit}
          onClose={() => setCreatingGasto(false)}
          showCategoria
        />
      )}

      {/* MODAL EDITAR */}
      {editingGasto && (
        <ModalForm
          title="Editar gasto"
          formData={formData}
          handleChange={handleChange}
          onSubmit={handleEditSubmit}
          onClose={() => setEditingGasto(null)}
          showCategoria
        />
      )}

      {/* MODAL ELIMINAR */}
      {deletingGasto && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">

          <div className="bg-white p-6 rounded-xl shadow-xl text-center">

            <h2 className="text-lg font-bold mb-4">
              ¿Eliminar este gasto?
            </h2>

            <div className="flex gap-4 justify-center">

              <button
                onClick={() => setDeletingGasto(null)}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Cancelar
              </button>

              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                Eliminar
              </button>

            </div>

          </div>
        </div>
      )}
    </>
  );
}

export default TablaGastos;