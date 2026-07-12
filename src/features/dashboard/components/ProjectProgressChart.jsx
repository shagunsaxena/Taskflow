import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { projectProgressData } from "../data/dashboardData";

function ProjectProgressChart() {
  return (
    <section className="h-full rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      {/* Chart Header */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-slate-900">
          Project Progress
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          Current progress across active projects
        </p>
      </div>

      {/* Chart */}
      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={projectProgressData}
            layout="vertical"
            margin={{
              top: 5,
              right: 30,
              left: 30,
              bottom: 5,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              horizontal={false}
            />

            <XAxis
              type="number"
              domain={[0, 100]}
              tickFormatter={(value) => `${value}%`}
            />

            <YAxis
              type="category"
              dataKey="name"
              width={120}
            />

            <Tooltip
              formatter={(value) => [`${value}%`, "Progress"]}
            />

            <Bar
              dataKey="progress"
              fill="#2563eb"
              radius={[0, 6, 6, 0]}
              barSize={28}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}

export default ProjectProgressChart;