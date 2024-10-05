import React from "react";

export const Input = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={`border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-400 ${className}`}
      {...props}
    />
  );
});

Input.displayName = "Input";