import { FiActivity } from "react-icons/fi";

import { recentActivities } from "../data/dashboardData";

function getInitials(name) {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

function RecentActivity() {
  return (
    <section className="h-full rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      {/* Header */}
      <div className="mb-5">
        <div className="flex items-center gap-2">
          <FiActivity
            size={20}
            className="text-blue-600"
          />

          <h3 className="text-lg font-semibold text-slate-900">
            Recent Activity
          </h3>
        </div>

        <p className="mt-1 text-sm text-slate-500">
          Latest updates from your team
        </p>
      </div>

      {/* Activity List */}
      <div className="space-y-5">
        {recentActivities.map((activity) => (
          <article
            key={activity.id}
            className="flex gap-3 border-b border-slate-100 pb-5 last:border-b-0 last:pb-0"
          >
            {/* User Avatar */}
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-600">
              {getInitials(activity.user)}
            </div>

            {/* Activity Content */}
            <div className="min-w-0 flex-1">
              <p className="text-sm text-slate-600">
                <span className="font-semibold text-slate-900">
                  {activity.user}
                </span>{" "}
                {activity.action}
              </p>

              <p className="mt-1 truncate text-sm font-medium text-slate-700">
                {activity.target}
              </p>

              <p className="mt-1 text-xs text-slate-400">
                {activity.time}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default RecentActivity;