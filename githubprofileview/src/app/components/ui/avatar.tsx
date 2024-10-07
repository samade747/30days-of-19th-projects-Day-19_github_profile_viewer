// components/ui/avatar.tsx
import React from "react";

export function Avatar({ children }: { children: React.ReactNode }) {
  return <div className="rounded-full overflow-hidden w-16 h-16">{children}</div>;
}

export function AvatarImage({ src, alt }: { src: string; alt: string }) {
  return <img src={src} alt={alt} className="object-cover w-full h-full" />;
}

export function AvatarFallback({ children }: { children: React.ReactNode }) {
  return <div className="bg-gray-200 flex items-center justify-center text-xl font-semibold">{children}</div>;
}
