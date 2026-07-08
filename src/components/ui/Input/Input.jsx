import { useId, useState } from "react";
import clsx from "clsx";
import { FiEye, FiEyeOff } from "react-icons/fi";

function Input({
  label,
  type = "text",
  placeholder = "",
  value,
  onChange,
  error,
  helperText,
  required = false,
  disabled = false,
  fullWidth = true,
  leftIcon,
  rightIcon,
  showPasswordToggle = true,
  className = "",
  ...props
}) {
  const inputId = useId();
  const [showPassword, setShowPassword] = useState(false);

  const inputType =
    type === "password"
      ? showPassword
        ? "text"
        : "password"
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

      {/* Input Container */}
      <div
        className={clsx(
          "flex h-11 items-center rounded-lg border bg-white px-3 transition-all duration-200",
          error
            ? "border-red-500 focus-within:border-red-500 focus-within:ring-2 focus-within:ring-red-200"
            : "border-slate-300 focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-200",
          disabled &&
            "cursor-not-allowed bg-slate-100 opacity-70"
        )}
      >
        {/* Left Icon */}
        {leftIcon && (
          <span className="mr-2 text-slate-400">
            {leftIcon}
          </span>
        )}

        {/* Input */}
        <input
          id={inputId}
          type={inputType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
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
            "w-full bg-transparent text-slate-800 placeholder:text-slate-400 outline-none",
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
            className="ml-2 text-slate-500 transition hover:text-slate-700"
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
            <span className="ml-2 text-slate-400">
              {rightIcon}
            </span>
          )
        )}
      </div>

      {/* Error */}
      {error ? (
        <p
          id={`${inputId}-error`}
          className="mt-1 text-sm text-red-500"
        >
          {error}
        </p>
      ) : (
        helperText && (
          <p
            id={`${inputId}-helper`}
            className="mt-1 text-sm text-slate-500"
          >
            {helperText}
          </p>
        )
      )}
    </div>
  );
}

export default Input;