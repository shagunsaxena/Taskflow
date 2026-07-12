import clsx from "clsx";
import { FiArrowRight, FiCalendar } from "react-icons/fi";

import { recentProjects } from "../data/dashboardData";

const statusStyles = {
  "In Progress": "bg-blue-100 text-blue-700",
  Review: "bg-amber-100 text-amber-700",
  Completed: "bg-green-100 text-green-700",
  Pending: "bg-slate-100 text-slate-700",
};

function RecentProjects() {
  return (
    <section className="h-full rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">
            Recent Projects
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Latest projects and their current progress
          </p>
        </div>

        <button
          type="button"
          className="flex items-center gap-1 text-sm font-medium text-blue-600 transition hover:text-blue-700"
        >
          View All
          <FiArrowRight size={16} />
        </button>
      </div>

      {/* Project List */}
      <div className="space-y-5">
        {recentProjects.map((project) => (
          <article
            key={project.id}
            className="border-b border-slate-100 pb-5 last:border-b-0 last:pb-0"
          >
            {/* Project Information */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h4 className="font-semibold text-slate-900">
                  {project.name}
                </h4>

                <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
                  <FiCalendar size={15} />

                  <span>
                    Due {project.dueDate}
                  </span>
                </div>
              </div>

              <span
                className={clsx(
                  "w-fit rounded-full px-2.5 py-1 text-xs font-medium",
                  statusStyles[project.status] ||
                    "bg-slate-100 text-slate-700"
                )}
              >
                {project.status}
              </span>
            </div>

            {/* Progress */}
            <div className="mt-4">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm text-slate-500">
                  Progress
                </span>

                <span className="text-sm font-semibold text-slate-700">
                  {project.progress}%
                </span>
              </div>

              <div
                className="h-2 overflow-hidden rounded-full bg-slate-100"
                role="progressbar"
                aria-label={`${project.name} progress`}
                aria-valuenow={project.progress}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="h-full rounded-full bg-blue-600 transition-all duration-300"
                  style={{
                    width: `${project.progress}%`,
                  }}
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default RecentProjects;