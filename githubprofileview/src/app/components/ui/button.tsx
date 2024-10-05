import React from "react";

export const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};