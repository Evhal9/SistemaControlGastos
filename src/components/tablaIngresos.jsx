import { Trash2, Pencil } from "lucide-react";
import { useEffect, useState } from "react";
import { useUser } from "../context/userContext";
import { ModalForm } from "./modalForm";

import {
  getIncomesByUser,
  createIncome,
  updateIncome,
  deleteIncome,
} from "../service/income";

function TablaIngresos() {
  const { user } = useUser();

  const [ingresos, setIngresos] = useState([]);
  const [creatingIngreso, setCreatingIngreso] = useState(false);

  const [editingIngreso, setEditingIngreso] = useState(null);
  const [deletingIngreso, setDeletingIngreso] = useState(null);

  const [formData, setFormData] = useState({
    descripcion: "",
    metodo: "",
    monto: 0,
  });

  // CARGAR INGRESOS
  useEffect(() => {
    const fetchIncomes = async () => {
      if (!user) return;

      const data = await getIncomesByUser(user.id);
      setIngresos(data);
    };

    fetchIncomes();
  }, [user]);

  // INPUTS
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: name === "monto" ? Number(value) : value,
    });
  };

  // CREAR INGRESO
  const handleCreateSubmit = async (e) => {
  e.preventDefault();

  try {
    await createIncome(user.id, formData);

    const data = await getIncomesByUser(user.id);
    setIngresos(data);

    setFormData({
      descripcion: "",
      metodo: "",
      monto: 0,
    });

    setCreatingIngreso(false);

  } catch (error) {
    console.error(error);
  }
};

  // ABRIR MODAL EDITAR
  const openEditModal = (ingreso) => {
    setEditingIngreso(ingreso);

    setFormData({
      descripcion: ingreso.descripcion,
      metodo: ingreso.metodo,
      monto: ingreso.monto,
    });
  };

  // EDITAR
  const handleEditSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateIncome(user.id, editingIngreso.id, formData);

      const nuevos = ingresos.map((ing) =>
        ing.id === editingIngreso.id ? { ...ing, ...formData } : ing
      );

      setIngresos(nuevos);
      setEditingIngreso(null);

    } catch (error) {
      console.error(error);
    }
  };

  // ELIMINAR
  const handleDelete = async () => {
    try {
      await deleteIncome(user.id, deletingIngreso.id);

      const nuevos = ingresos.filter(
        (ing) => ing.id !== deletingIngreso.id
      );

      setIngresos(nuevos);
      setDeletingIngreso(null);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {/* TABLA */}
      <div className="w-full m-2 grid grid-cols-1 border-2 border-[#f29bc1] rounded-xl bg-[#fadff2]">

        {/* HEADER */}
        <div className="flex w-full flex-row p-3 bg-[#f8c8e0] rounded-t-xl">
          <h3 className="font-bold w-[5%]">Nro</h3>
          <h3 className="font-bold text-center w-[15%]">Fecha</h3>
          <h3 className="font-bold text-center w-[40%]">Descripción</h3>
          <h3 className="font-bold w-[20%]">Método</h3>
          <h3 className="font-bold w-[15%] text-left">Monto</h3>
          <div className="w-[5%]"></div>
        </div>

        {ingresos.map((ingreso) => (
          <div
            key={ingreso.id}
            className="group flex w-full flex-row items-center p-2 border-t border-[#f29bc1] bg-[#fcfbff] hover:bg-[#fadff2]"
          >
            <p className="w-[5%]">{ingreso.id}</p>
            <p className="text-center w-[15%]">{ingreso.fecha}</p>
            <p className="text-center w-[40%]">{ingreso.descripcion}</p>
            <p className="w-[20%]">{ingreso.metodo}</p>

            <p className="w-[15%] text-green-500 font-medium">
              ${ingreso.monto}
            </p>

            <div className="flex gap-3 w-[5%] justify-end opacity-0 group-hover:opacity-100 transition">

              <button
                onClick={() => openEditModal(ingreso)}
                className="text-blue-500 hover:text-blue-700"
              >
                <Pencil size={18} />
              </button>

              <button
                onClick={() => setDeletingIngreso(ingreso)}
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
              metodo: "",
              monto: 0,
            });
            setCreatingIngreso(true);
          }}
          className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600"
        >
          + Agregar ingreso
        </button>
      </div>

      {/* MODAL CREAR */}
      {creatingIngreso && (
        <ModalForm
          title="Agregar ingreso"
          formData={formData}
          handleChange={handleChange}
          onSubmit={handleCreateSubmit}
          onClose={() => setCreatingIngreso(false)}
        />
      )}

      {/* MODAL EDITAR */}
      {editingIngreso && (
        <ModalForm
          title="Editar ingreso"
          formData={formData}
          handleChange={handleChange}
          onSubmit={handleEditSubmit}
          onClose={() => setEditingIngreso(null)}
        />
      )}

      {/* MODAL ELIMINAR */}
      {deletingIngreso && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">

          <div className="bg-white p-6 rounded-xl shadow-xl text-center">

            <h2 className="text-lg font-bold mb-4">
              ¿Querés eliminar este ingreso?
            </h2>

            <div className="flex gap-4 justify-center">

              <button
                onClick={() => setDeletingIngreso(null)}
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

export default TablaIngresos;