export function ModalForm({ title, formData, handleChange, onSubmit, onClose, showCategoria = false }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">

      <div className="bg-white p-6 rounded-xl w-[400px] shadow-xl">

        <h2 className="text-xl font-bold mb-4">{title}</h2>

        <form onSubmit={onSubmit} className="flex flex-col gap-3">

          <input
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            placeholder="Descripción"
            className="border p-2 rounded"
            required
          />

          {/* SOLO SI ES GASTO */}
          {showCategoria && (
            <input
              name="categoria"
              value={formData.categoria}
              onChange={handleChange}
              placeholder="Categoría"
              className="border p-2 rounded"
              required
            />
          )}

          <select
            name="metodo"
            value={formData.metodo}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          >
            <option value="">Método</option>
            <option value="Efectivo">Efectivo</option>
            <option value="Tarjeta">Tarjeta</option>
            <option value="Transferencia">Transferencia</option>
          </select>

          <input
            type="number"
            name="monto"
            value={formData.monto}
            onChange={handleChange}
            placeholder="Monto"
            className="border p-2 rounded"
            required
          />

          <div className="flex justify-end gap-3 mt-4">

            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Cancelar
            </button>

            <button
              type="submit"
              className="px-4 py-2 bg-purple-600 text-white rounded"
            >
              Guardar
            </button>

          </div>

        </form>

      </div>
    </div>
  );
}