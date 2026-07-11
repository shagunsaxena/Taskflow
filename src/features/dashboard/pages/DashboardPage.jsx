import { useSelector } from "react-redux";

function DashboardPage() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-900">
        Welcome back, {user?.name || "User"}!
      </h2>

      <p className="mt-2 text-slate-600">
        Here's an overview of your projects and tasks.
      </p>
    </div>
  );
}

export default DashboardPage;