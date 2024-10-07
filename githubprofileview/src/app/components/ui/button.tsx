/* eslint-disable @typescript-eslint/no-explicit-any */

// components/ui/button.tsx
import React from "react";

export function Button({
  onClick,
  children,
  className = "",
}: {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button onClick={onClick} className={`btn py-2 px-4 rounded ${className}`}>
      {children}
    </button>
  );
}
