import clsx from "clsx";

const paddingStyles = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

const shadowStyles = {
  none: "",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
};

function Card({
  title,
  subtitle,
  children,
  footerContent,
  padding = "md",
  shadow = "sm",
  className = "",
}) {
  return (
    <div
      className={clsx(
        "rounded-xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300",
        paddingStyles[padding],
        shadowStyles[shadow],
        className
      )}
    >
      {(title || subtitle) && (
        <div className="mb-4">
          {title && (
            <h3 className="text-lg font-semibold text-slate-800">
              {title}
            </h3>
          )}

          {subtitle && (
            <p className="mt-1 text-sm text-slate-500">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div>{children}</div>

      {footerContent && (
        <div className="mt-6 border-t border-slate-200 pt-4">
          {footerContent}
        </div>
      )}
    </div>
  );
}

export default Card;
