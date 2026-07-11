import { useId, useState } from "react";
import clsx from "clsx";
import { FiEye, FiEyeOff } from "react-icons/fi";

function Input({
  label,
  type = "text",
  error,
  helperText,
  leftIcon,
  rightIcon,
  required = false,
  disabled = false,
  fullWidth = true,
  showPasswordToggle = true,
  className = "",
  id,
  ...props
}) {
  const generatedId = useId();
  const inputId = id || generatedId;

  const [showPassword, setShowPassword] = useState(false);

  const inputType =
    type === "password" && showPassword
      ? "text"
      : type;

  return (
    <div className={clsx(fullWidth && "w-full")}>
      {/* Label */}
      {label && (
        <label
          htmlFor={inputId}
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          {label}

          {required && (
            <span className="ml-1 text-red-500">*</span>
          )}
        </label>
      )}

      {/* Input Wrapper */}
      <div
        className={clsx(
          "flex h-12 items-center rounded-xl border bg-white px-4 transition-all duration-200",

          error
            ? "border-red-500 focus-within:border-red-500 focus-within:ring-2 focus-within:ring-red-200"
            : "border-slate-300 focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-200",

          disabled &&
            "cursor-not-allowed bg-slate-50 opacity-70"
        )}
      >
        {/* Left Icon */}
        {leftIcon && (
          <span className="mr-3 text-slate-500">
            {leftIcon}
          </span>
        )}

        {/* Input */}
        <input
          id={inputId}
          type={inputType}
          disabled={disabled}
          aria-invalid={!!error}
          aria-describedby={
            error
              ? `${inputId}-error`
              : helperText
              ? `${inputId}-helper`
              : undefined
          }
          className={clsx(
            "w-full bg-transparent text-slate-800 placeholder:text-slate-500 outline-none",
            disabled && "cursor-not-allowed",
            className
          )}
          {...props}
        />

        {/* Password Toggle */}
        {type === "password" &&
        showPasswordToggle ? (
          <button
            type="button"
            onClick={() =>
              setShowPassword((prev) => !prev)
            }
            className="ml-3 text-slate-500 transition hover:text-slate-700"
            aria-label={
              showPassword
                ? "Hide password"
                : "Show password"
            }
          >
            {showPassword ? (
              <FiEyeOff size={18} />
            ) : (
              <FiEye size={18} />
            )}
          </button>
        ) : (
          rightIcon && (
            <span className="ml-3 text-slate-500">
              {rightIcon}
            </span>
          )
        )}
      </div>

      {/* Helper/Error */}
      {error ? (
        <p
          id={`${inputId}-error`}
          className="mt-2 text-sm text-red-500"
        >
          {error}
        </p>
      ) : (
        helperText && (
          <p
            id={`${inputId}-helper`}
            className="mt-2 text-sm text-slate-500"
          >
            {helperText}
          </p>
        )
      )}
    </div>
  );
}

export default Input;