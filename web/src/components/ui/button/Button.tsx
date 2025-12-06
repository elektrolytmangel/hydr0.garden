import cn from "classnames";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <button
      className={cn(
        "w-full",
        "px-8",
        "py-3",
        "rounded-sm",
        "transition-all",
        "duration-300",
        "cursor-pointer",
        "text-foreground",
        "backdrop-blur-sm",
        "text-lg",
        "shadow-sm",
        "shadow-black/10 ",
        "bg-white/10",
        "hover:bg-white/20",
        "active:bg-white/40",
        "disabled:bg-white/10",
        "disabled:opacity-60",
        "disabled:cursor-auto",
        "disabled:shadow-none",
        "focus:outline-none",
        "hover:shadow-sm",
        "hover:shadow-white/20",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
