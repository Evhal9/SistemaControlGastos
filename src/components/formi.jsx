import { useState } from "react";

export default function AddMovimientoCard() {
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
    console.log(formData); // después acá conectás con tu API
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md">

      {/* Botón */}
      <button
        onClick={() => setMostrarForm(!mostrarForm)}
        className="bg-pink-400 hover:bg-[#9c8fe8] text-white px-4 py-2 rounded-lg transition "
      >
        {mostrarForm ? "Cerrar" : "Registrar ingreso"}
      </button>

      {/* Formulario */}
      {mostrarForm && (
        <form onSubmit={handleSubmit} className="mt-4 space-y-3">

          <input
            type="text"
            name="descripcion"
            placeholder="Descripción"
            value={formData.descripcion}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-pink-300 text-[#474747]"
          />

          <input
            type="text"
            name="categoria"
            placeholder="Categoría"
            value={formData.categoria}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-pink-300 text-[#474747]"
          />

          <input
            type="text"
            name="metodo"
            placeholder="Método"
            value={formData.metodo}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-pink-300 text-[#474747]"
          />

          <input
            type="number"
            name="monto"
            placeholder="Monto"
            value={formData.monto}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-pink-300 text-[#474747]"
          />

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition"
          >
            Guardar
          </button>

        </form>
      )}
    </div>
  );
}