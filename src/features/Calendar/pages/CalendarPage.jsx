import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Button } from "../../../components/ui";
import { logout } from "../../auth/authSlice";

function DashboardPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login", { replace: true });
  };

  return (
    <main className="min-h-screen bg-slate-100 p-10">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center justify-between rounded-xl bg-white p-6 shadow-md">
          <div>
            <h1 className="text-3xl font-bold">
              Dashboard
            </h1>

            <p className="mt-2 text-slate-600">
              Welcome, {user?.name}
            </p>
          </div>

          <Button
            variant="danger"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      </div>
    </main>
  );
}

export default DashboardPage;