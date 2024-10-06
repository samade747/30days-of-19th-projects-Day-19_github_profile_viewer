import React from 'react';

interface AvatarProps {
  className?: string;
  children?: React.ReactNode;
  src?: string;
}

const Avatar: React.FC<AvatarProps> = ({ className, children, src }) => {
  return (
    <div className={className}>
      <img src={src} alt="avatar" />
      {children}
    </div>
  );
};

export default Avatar;
