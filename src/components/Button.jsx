import React from "react";
import { cn } from "../features/cn";

const Button = ({ title, secondary, icon }) => {
  return (
    <button
      className={cn(
        secondary
          ? "bg-transparent text-primary font-medium border border-primary "
          : "bg-primary font-bold text-white",
        " px-8 py-3 rounded-full gap-x-2 w-full flex items-center justify-center text-base"
      )}
    >
      {title}
      {icon}
    </button>
  );
};

export default Button;
