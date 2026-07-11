import {
  FiGrid,
  FiFolder,
  FiCheckSquare,
  FiCalendar,
  FiSettings,
  FiX,
} from "react-icons/fi";

import { NavLink } from "react-router-dom";
import clsx from "clsx";

const navigationItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: FiGrid,
  },
  {
    name: "Projects",
    path: "/projects",
    icon: FiFolder,
  },
  {
    name: "Tasks",
    path: "/tasks",
    icon: FiCheckSquare,
  },
  {
    name: "Calendar",
    path: "/calendar",
    icon: FiCalendar,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: FiSettings,
  },
];

function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={clsx(
          "fixed inset-y-0 left-0 z-50 flex w-64 flex-col bg-slate-900 text-white transition-transform duration-300",
          isOpen ? "translate-x-0" : "-translate-x-full",
          "lg:translate-x-0"
        )}
      >
        {/* Logo */}
        <div className="flex h-16 items-center justify-between border-b border-slate-700 px-6">
          <div>
            <h1 className="text-xl font-bold text-white">
              TaskFlow
            </h1>

            <p className="text-xs text-slate-400">
              Project Management
            </p>
          </div>

          {/* Mobile close button */}
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-800 hover:text-white lg:hidden"
            aria-label="Close sidebar"
          >
            <FiX size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav
          className="flex-1 space-y-1 px-3 py-6"
          aria-label="Main navigation"
        >
          {navigationItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={({ isActive }) =>
                  clsx(
                    "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  )
                }
              >
                <Icon size={20} />

                <span>{item.name}</span>
              </NavLink>
            );
          })}
        </nav>

        {/* Sidebar footer */}
        <div className="border-t border-slate-700 p-4">
          <p className="text-center text-xs text-slate-500">
            TaskFlow v1.0
          </p>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;