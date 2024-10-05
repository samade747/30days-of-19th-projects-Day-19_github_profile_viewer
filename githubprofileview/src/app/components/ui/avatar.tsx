import React from "react";

export const Avatar = ({ className, children }) => {
  return (
    <div
      className={`w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200 ${className}`}
    >
      {children}
    </div>
  );
};

export const AvatarImage = ({ src }) => {
  return <img src={src} alt="Avatar" className="w-full h-full object-cover" />;
};

export const AvatarFallback = ({ children }) => {
  return (
    <div className="flex items-center justify-center w-full h-full bg-gray-300">
      {children}
    </div>
  );
};