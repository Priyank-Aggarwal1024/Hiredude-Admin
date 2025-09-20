import React from "react";
import clsx from "clsx";

const Button = ({
  children,
  onClick = () => {},
  variant = "primary",
  type = "button",
  className = "",
}) => {
  const baseStyles =
    "flex px-3 py-2 justify-center items-center gap-2 rounded-md text-sm font-medium leading-5 tracking-[-0.25px] max-w-full cursor-pointer";

  const variants = {
    primary: "bg-gradient-to-r from-[#4CB7A3] to-[#1D4ED8] text-white",
    secondary: "bg-gray-200 text-[#1D293D] [&:hover]:bg-gray-300",
    danger: "bg-red-500 text-white [&:hover]:bg-red-600",
    outline: "border border-gray-300 text-[#1D293D] [&:hover]:bg-gray-100",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(baseStyles, variants[variant], className)}
    >
      {children}
    </button>
  );
};

export default Button;
