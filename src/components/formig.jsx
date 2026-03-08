import { useState } from "react";

export default function AddGastoCard() {
  const [mostrarForm, setMostrarForm] = useState(false);

  const [formData, setFormData] = useState({
    descripcion: "",
    categoria: "",
    metodo: "",
    monto: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación simple
    if (formData.monto <= 0) {
      alert("El monto debe ser mayor a 0");
      return;
    }

    console.log("Nuevo gasto:", formData);

    // Resetear formulario
    setFormData({
      descripcion: "",
      categoria: "",
      metodo: "",
      monto: ""
    });

    setMostrarForm(false);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md border-2 border-[#8b6ad9]">

      {/* BOTÓN */}
      <button
        onClick={() => setMostrarForm(!mostrarForm)}
        className="bg-[#8b6ad9] hover:bg-[#7557c7] text-white px-4 py-2 rounded-lg transition"
      >
        {mostrarForm ? "Cerrar" : "Agregar Gasto"}
      </button>

      {/* FORMULARIO */}
      {mostrarForm && (
        <form onSubmit={handleSubmit} className="mt-4 space-y-3">

          <input
            type="text"
            name="descripcion"
            placeholder="Descripción"
            value={formData.descripcion}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#8b6ad9]"
          />

          <input
            type="text"
            name="categoria"
            placeholder="Categoría"
            value={formData.categoria}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#8b6ad9]"
          />

          <input
            type="text"
            name="metodo"
            placeholder="Método de pago"
            value={formData.metodo}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#8b6ad9]"
          />

          <input
            type="number"
            name="monto"
            placeholder="Monto"
            value={formData.monto}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#8b6ad9]"
          />

          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition"
          >
            Guardar Gasto
          </button>

        </form>
      )}
    </div>
  );
}