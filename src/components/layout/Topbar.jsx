import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FiBell,
  FiLogOut,
  FiMenu,
  FiSearch,
  FiUser,
} from "react-icons/fi";

import { logout } from "../../features/auth/authSlice";

const pageTitles = {
  "/dashboard": "Dashboard",
  "/projects": "Projects",
  "/tasks": "Tasks",
  "/calendar": "Calendar",
  "/settings": "Settings",
};

function Topbar({ onMenuClick }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { user } = useSelector((state) => state.auth);

  const pageTitle = pageTitles[location.pathname] || "TaskFlow";

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login", { replace: true });
  };

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center border-b border-slate-200 bg-white px-4 sm:px-6 lg:px-8">
      <div className="flex w-full items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={onMenuClick}
            className="rounded-lg p-2 text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 lg:hidden"
            aria-label="Open sidebar"
          >
            <FiMenu size={22} />
          </button>

          {/* Page Title */}
          <div>
            <h1 className="text-xl font-semibold text-slate-900">
              {pageTitle}
            </h1>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Search */}
          <div className="relative hidden md:block">
            <FiSearch
              size={18}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="search"
              placeholder="Search..."
              aria-label="Search"
              className="h-10 w-56 rounded-lg border border-slate-300 bg-slate-50 pl-10 pr-4 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100 lg:w-64"
            />
          </div>

          {/* Notifications */}
          <button
            type="button"
            className="relative rounded-lg p-2 text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
            aria-label="Notifications"
          >
            <FiBell size={20} />

            <span
              className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500"
              aria-hidden="true"
            />
          </button>

          {/* User Information */}
          <div className="hidden items-center gap-3 border-l border-slate-200 pl-4 sm:flex">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <FiUser size={18} />
            </div>

            <div className="hidden lg:block">
              <p className="max-w-40 truncate text-sm font-medium text-slate-800">
                {user?.name || "User"}
              </p>

              <p className="max-w-40 truncate text-xs text-slate-500">
                {user?.role || "Member"}
              </p>
            </div>
          </div>

          {/* Logout */}
          <button
            type="button"
            onClick={handleLogout}
            className="rounded-lg p-2 text-slate-600 transition hover:bg-red-50 hover:text-red-600"
            aria-label="Logout"
            title="Logout"
          >
            <FiLogOut size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Topbar;