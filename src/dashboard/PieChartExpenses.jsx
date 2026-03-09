import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useEffect, useState } from "react";
import { useUser } from "../context/userContext";
import { getExpensesByUser } from "../service/expense";

const COLORS = ["#6366f1", "#10b981", "#f59e0b", "#ef4444"];

export default function PieChartExpenses() {

  const { user } = useUser();
  const [gastos, setGastos] = useState([]);

  useEffect(() => {

    const fetchExpenses = async () => {

      if (!user) return;

      const data = await getExpensesByUser(user.id);

      // AGRUPAR POR CATEGORIA
      const agrupados = Object.values(
        data.reduce((acc, gasto) => {

          if (!acc[gasto.categoria]) {
            acc[gasto.categoria] = {
              categoria: gasto.categoria,
              monto: 0
            };
          }

          acc[gasto.categoria].monto += gasto.monto;

          return acc;

        }, {})
      );

      setGastos(agrupados);

    };

    fetchExpenses();

  }, [user]);

  return (
    <div className="bg-white rounded-xl shadow-md p-4">

      <h2 className="text-lg font-semibold mb-4">
        Gastos por Categoría
      </h2>

      <ResponsiveContainer width="100%" height={300}>

        <PieChart>

          <Pie
            data={gastos}
            dataKey="monto"
            nameKey="categoria"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {gastos.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
          <Legend />

        </PieChart>

      </ResponsiveContainer>

    </div>
  );
}