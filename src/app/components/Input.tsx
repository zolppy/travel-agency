import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { ClassValue, clsx } from "clsx";

interface IInput extends HTMLAttributes<HTMLInputElement> {
  type?: "text" | "date" | "number" | "email" | "datetime";
  placeholder?: string;
  required: boolean;
}

export const Input = ({
  type = "text",
  placeholder = "",
  required,
  className = "",
  ...props
}: IInput) => {
  const baseStyles = "bg-white px-2 py-4 border border-[#ccc]";

  return (
    <input
      {...props}
      type={type}
      placeholder={placeholder}
      required={required}
      className={twMerge(clsx(baseStyles, className as ClassValue))}
    />
  );
};

Input.displayName = "Input";
