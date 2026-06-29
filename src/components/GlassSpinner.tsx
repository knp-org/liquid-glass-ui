import React from 'react';

export function GlassSpinner({ className = '', size = 24 }: { className?: string, size?: number }) {
  return (
    <div 
      className={`glass-spinner ${className}`} 
      style={{ width: size, height: size }}
    />
  );
}
