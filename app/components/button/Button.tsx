import React, { ReactNode } from "react";

interface DynamicButtonProps {
  height?: string;
  width?: string;
  children: ReactNode;
  variant: string;
  size: string;
  style?: React.CSSProperties;
}

interface VariantClasses {
  [variant: string]: string; // Key is string (variant name), value is string (CSS class)
}

interface SizeClasses {
  [size: string]: string;
}

const Button: React.FC<DynamicButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center px-4 py-2 rounded-md font-medium";

  const variantClasses: VariantClasses = {
    primary: "bg-blue-500 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-700 hover:bg-gray-300",
    bgBlack: "bg-[#111111] text-[#ffffff]",
    gray: "bg-[rgb(36,36,36)] text-gray-500 hover:bg-white",
  };

  const sizeClasses: SizeClasses = {
    sm: "text-xs py-1 px-2",
    md: "text-base py-2 px-4",
    lg: "text-lg py-3 px-6",
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`;

  const width = props.width ? props.width : "auto"; // Use passed width, default to 'auto'
  const height = props.height ? props.height : "fit-content"; // Use passed height, default to 'auto'

  return (
    <button
      className={combinedClasses}
      style={{ minWidth: "fit-content", height, width }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
