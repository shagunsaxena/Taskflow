import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import { taskDistributionData } from "../data/dashboardData";

const COLORS = [
  "#16a34a",
  "#2563eb",
  "#f59e0b",
];

function TaskDistributionChart() {
  const totalTasks = taskDistributionData.reduce(
    (total, item) => total + item.value,
    0
  );

  return (
    <section className="h-full rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      {/* Chart Header */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-slate-900">
          Task Distribution
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          Tasks grouped by their current status
        </p>
      </div>

      {/* Donut Chart */}
      <div className="relative h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={taskDistributionData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={65}
              outerRadius={90}
              paddingAngle={3}
            >
              {taskDistributionData.map((item, index) => (
                <Cell
                  key={item.name}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>

        {/* Center Label */}
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold text-slate-900">
            {totalTasks}
          </span>

          <span className="text-sm text-slate-500">
            Total Tasks
          </span>
        </div>
      </div>

      {/* Custom Legend */}
      <div className="mt-4 space-y-3">
        {taskDistributionData.map((item, index) => (
          <div
            key={item.name}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <span
                className="h-3 w-3 rounded-full"
                style={{
                  backgroundColor:
                    COLORS[index % COLORS.length],
                }}
              />

              <span className="text-sm text-slate-600">
                {item.name}
              </span>
            </div>

            <span className="text-sm font-semibold text-slate-900">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TaskDistributionChart;