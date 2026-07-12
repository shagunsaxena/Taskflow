import { useSelector } from "react-redux";
import { FiPlus } from "react-icons/fi";

import { Button } from "../../../components/ui";
import StatCard from "../components/StatCard";
import { dashboardStats } from "../data/dashboardData";
import ProjectProgressChart from "../components/ProjectProgressChart";

import TaskDistributionChart from "../components/TaskDistributionChart";
import RecentProjects from "../components/RecentProjects";
import RecentActivity from "../components/RecentActivity";

function DashboardPage() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="space-y-6">
      {/* Dashboard Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Welcome back, {user?.name || "User"}!
          </h2>

          <p className="mt-1 text-slate-600">
            Here's what's happening with your projects today.
          </p>
        </div>

        <Button leftIcon={<FiPlus size={18} />}>
          New Project
        </Button>
      </div>

      {/* KPI Statistics */}
      <section
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4"
        aria-label="Dashboard statistics"
      >
        {dashboardStats.map((stat) => (
          <StatCard
            key={stat.id}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            trend={stat.trend}
            icon={stat.icon}
          />
        ))}
      </section>

     {/* Dashboard Charts */}
      <section
        className="grid grid-cols-1 items-stretch gap-6 xl:grid-cols-3"
        aria-label="Dashboard charts"
      >
        <div className="h-full xl:col-span-2">
          <ProjectProgressChart />
        </div>

        <div className="h-full">
          <TaskDistributionChart />
        </div>
      </section>

      {/* Recent Projects and Activity */}
      <section
        className="grid grid-cols-1 items-stretch gap-6 xl:grid-cols-3"
        aria-label="Recent projects and activity"
      >
        <div className="h-full xl:col-span-2">
          <RecentProjects />
        </div>

        <div className="h-full">
          <RecentActivity />
        </div>
      </section>

    </div>
  );
}

export default DashboardPage;