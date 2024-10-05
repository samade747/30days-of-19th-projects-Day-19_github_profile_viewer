
import React from "react";

export const Card = ({ className, children }) => {
  return (
    <div
      className={`rounded-lg shadow-lg bg-white border border-gray-200 ${className}`}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ children }) => {
  return <div className="p-4 border-b border-gray-200">{children}</div>;
};

export const CardTitle = ({ children }) => {
  return <h2 className="text-xl font-semibold">{children}</h2>;
};

export const CardDescription = ({ children }) => {
  return <p className="text-gray-500">{children}</p>;
};

export const CardContent = ({ children }) => {
  return <div className="p-4">{children}</div>;
};

export const CardFooter = ({ children }) => {
  return (
    <div className="p-4 border-t border-gray-200">{children}</div>
  );
};