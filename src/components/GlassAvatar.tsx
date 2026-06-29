import React from 'react';

interface GlassAvatarProps {
  src?: string;
  initials?: string;
  className?: string;
}

export function GlassAvatar({ src, initials, className = '' }: GlassAvatarProps) {
  return (
    <div className={`glass-avatar ${className}`}>
      {src ? (
        <span
          aria-label="Avatar"
          className="glass-avatar-image"
          role="img"
          style={{ backgroundImage: `url(${src})` }}
        />
      ) : (
        <span>{initials}</span>
      )}
    </div>
  );
}
