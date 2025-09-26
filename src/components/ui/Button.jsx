import React from "react";

const Button = React.forwardRef(
  (
    {
      className = "",
      variant = "primary",
      size = "md",
      children,
      disabled = false,
      loading = false,
      ...props
    },
    ref
  ) => {
    // Variant styles
    const variants = {
      primary:
        "bg-primary text-white border border-primary hover:bg-[#E62E00] hover:border-[#E62E00] shadow-lg hover:shadow-xl hover:shadow-primary/25",

      secondary:
        "bg-transparent text-white border-2 border-white hover:bg-white hover:text-black backdrop-blur-sm",

      outline:
        "bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white",

      ghost:
        "bg-transparent text-white border border-transparent hover:bg-white/10 hover:border-white/20",

      gradient:
        "bg-gradient-to-r from-primary to-[#B12424] text-white hover:from-[#E62E00] hover:to-[#9A1F1F] shadow-lg hover:shadow-xl hover:shadow-primary/30",

      success:
        "bg-green-600 text-white border border-green-600 hover:bg-green-700 hover:border-green-700 shadow-lg hover:shadow-xl hover:shadow-green-600/25",

      warning:
        "bg-yellow-500 text-black border border-yellow-500 hover:bg-yellow-600 hover:border-yellow-600 shadow-lg hover:shadow-xl hover:shadow-yellow-500/25",

      danger:
        "bg-red-600 text-white border border-red-600 hover:bg-red-700 hover:border-red-700 shadow-lg hover:shadow-xl hover:shadow-red-600/25",
    };

    // Size styles
    const sizes = {
      xs: "px-2 py-1 text-xs h-7",
      sm: "px-4 py-2 text-sm h-9",
      md: "px-6 py-3 text-base h-11",
      lg: "px-8 py-4 text-lg h-13",
      xl: "px-10 py-5 text-xl h-16",
    };

    // Loading spinner component
    const LoadingSpinner = () => (
      <svg
        className="animate-spin -ml-1 mr-2 h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    );

    // Base styles
    const baseClasses = [
      "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary",
      "disabled:pointer-events-none disabled:opacity-50",
      "relative overflow-hidden group",
      "transform-gpu active:scale-[0.98]",
      variants[variant] || variants.primary,
      sizes[size] || sizes.md,
      loading && "cursor-wait",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <button
        className={baseClasses}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {/* Background shine effect */}
        {(variant === "gradient" || variant === "primary") && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
        )}

        {/* Content */}
        <span className="relative z-10 flex items-center justify-center">
          {loading && <LoadingSpinner />}
          {children}
        </span>
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
