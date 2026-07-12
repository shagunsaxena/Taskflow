import {
  FiFolder,
  FiActivity,
  FiCheckCircle,
  FiClock,
  FiTrendingUp,
  FiTrendingDown,
} from "react-icons/fi";

import clsx from "clsx";

const iconMap = {
  projects: FiFolder,
  active: FiActivity,
  completed: FiCheckCircle,
  pending: FiClock,
};

const iconStyles = {
  projects: "bg-blue-100 text-blue-600",
  active: "bg-purple-100 text-purple-600",
  completed: "bg-green-100 text-green-600",
  pending: "bg-amber-100 text-amber-600",
};

function StatCard({
  title,
  value,
  change,
  trend,
  icon,
}) {
  const Icon = iconMap[icon] || FiFolder;

  const TrendIcon =
    trend === "up" ? FiTrendingUp : FiTrendingDown;

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <p className="mt-2 text-3xl font-bold text-slate-900">
            {value}
          </p>
        </div>

        <div
          className={clsx(
            "flex h-11 w-11 items-center justify-center rounded-lg",
            iconStyles[icon]
          )}
        >
          <Icon size={22} />
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2">
        <TrendIcon
          size={16}
          className={
            trend === "up"
              ? "text-green-600"
              : "text-red-600"
          }
        />

        <span
          className={clsx(
            "text-sm font-medium",
            trend === "up"
              ? "text-green-600"
              : "text-red-600"
          )}
        >
          {change}
        </span>
      </div>
    </div>
  );
}

export default StatCard;