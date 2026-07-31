import React from "react";

export default function Badge({
  variant = "default",
  children,
  className = "",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center px-3 py-2 rounded-full text-sm font-medium transition-colors duration-200 ease-in-out cursor-pointer select-none";

  const variants = {
    default:
      "bg-badge-bg border border-badge-border text-text-200 text-xl hover:bg-badge-hover-bg hover:badge-hover-text focus:border focus:border-theme-switch-focus",
    active:
      "bg-badge-active-bg text-badge-active-text text-xl hover:bg-badge-active-hover focus:border focus:border-theme-switch-focus",
    secondary:
      "border border-badge-border text-text-200 text-[16px] hover:bg-badge-secondary-hover hover:text-badge-active-text focus:border focus:border-theme-switch-focus",
  };

  const chosenVariant = variants[variant] || variants.default;
  return (
    <button
      className={`${baseStyles} ${chosenVariant} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
