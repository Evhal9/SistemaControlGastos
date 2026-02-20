import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { gastoss } from '../components/datos'

const COLORS = ['#6366f1', '#10b981', '#f59e0b', '#ef4444'];

export default function PieChartExpenses() {
  const gastos = gastoss

  return (
    <div className="bg-white mt- rounded-xl shadow-md">
      <h2 className="text-lg font-semibold mb-4">
        Gastos por Categoría
      </h2>

      <ResponsiveContainer width="100%" height={300} >
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
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}