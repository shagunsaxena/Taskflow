import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Button, Input } from "../../../components/ui";

import { login } from "../services/authService";
import {
  loginStart,
  loginSuccess,
  loginFailure,
} from "../authSlice";

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    loading,
    error,
  } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = async (data) => {
    try {
      dispatch(loginStart());

      const response = await login(data);

      dispatch(loginSuccess(response));

      navigate("/dashboard");
    } catch (err) {
      dispatch(loginFailure(err.message));
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      {/* Email */}
      <Input
        label="Email Address"
        type="email"
        placeholder="Enter your email"
        required
        error={errors.email?.message}
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^\S+@\S+\.\S+$/,
            message: "Please enter a valid email address",
          },
        })}
      />

      {/* Password */}
      <Input
        label="Password"
        type="password"
        placeholder="Enter your password"
        required
        error={errors.password?.message}
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters",
          },
        })}
      />

      {/* Remember Me */}
      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 text-sm text-slate-600">
          <input
            type="checkbox"
            className="h-4 w-4 rounded border-slate-300"
            {...register("rememberMe")}
          />
          Remember Me
        </label>

        <button
          type="button"
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          Forgot Password?
        </button>
      </div>

      {/* Authentication Error */}
      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-600">
          {error}
        </div>
      )}

      {/* Login Button */}
      <Button
        type="submit"
        fullWidth
        loading={loading}
      >
        {loading ? "Logging in..." : "Login"}
      </Button>

      {/* Demo Credentials */}
      <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
        <h3 className="mb-2 text-sm font-semibold text-slate-700">
          Demo Credentials
        </h3>

        <p className="text-sm text-slate-600">
          <strong>Email:</strong> admin@taskflow.com
        </p>

        <p className="text-sm text-slate-600">
          <strong>Password:</strong> password123
        </p>
      </div>
    </form>
  );
}

export default LoginForm;