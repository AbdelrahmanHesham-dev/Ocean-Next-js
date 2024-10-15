import { FC, ReactNode } from "react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline";
  isFullSize?: boolean;
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({
  variant = "primary",
  isFullSize = false, 
  children,
}) => {
  return (
    <button
      className={`btn ${
        variant === "primary"
          ? "btn-primary"
          : variant === "secondary"
          ? "btn-secondary"
          : "btn-outline"
      } ${isFullSize ? "btn-full" : ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
