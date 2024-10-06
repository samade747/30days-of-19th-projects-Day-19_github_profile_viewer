import React, { ReactNode } from "react";

// Types for the Avatar component props
interface AvatarProps {
  className?: string;
  children?: ReactNode;
}

export const Avatar: React.FC<AvatarProps> = ({ className, children }) => {
  return (
    <div
      className={`w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200 ${className}`}
    >
      {children}
    </div>
  );
};

// Types for AvatarImage
interface AvatarImageProps {
  src: string;
}

export const AvatarImage: React.FC<AvatarImageProps> = ({ src }) => {
  return <img src={src} alt="Avatar" className="w-full h-full object-cover" />;
};

// Types for AvatarFallback
interface AvatarFallbackProps {
  children: ReactNode;
}

export const AvatarFallback: React.FC<AvatarFallbackProps> = ({ children }) => {
  return (
    <div className="flex items-center justify-center w-full h-full bg-gray-300">
      {children}
    </div>
  );
};
