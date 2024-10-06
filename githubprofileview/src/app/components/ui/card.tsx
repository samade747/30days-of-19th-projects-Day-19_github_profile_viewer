import React, { ReactNode } from "react";

// Types for the Card component props
interface CardProps {
  className?: string;
  children: ReactNode;
}

export const Card: React.FC<CardProps> = ({ className, children }) => {
  return (
    <div
      className={`rounded-lg shadow-lg bg-white border border-gray-200 ${className}`}
    >
      {children}
    </div>
  );
};

// Types for the other card components
export const CardHeader: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="p-4 border-b border-gray-200">{children}</div>;
};

export const CardTitle: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <h2 className="text-xl font-semibold">{children}</h2>;
};

export const CardDescription: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <p className="text-gray-500">{children}</p>;
};

export const CardContent: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="p-4">{children}</div>;
};

export const CardFooter: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="p-4 border-t border-gray-200">{children}</div>;
};
