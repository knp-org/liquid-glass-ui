import React from 'react';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: string | number;
  height?: string | number;
}

export function GlassCard({ className = '', children, width, height, style, ...props }: GlassCardProps) {
  return (
    <div 
      className={`glass-card ${className}`} 
      style={{ width, height, ...style }}
      {...props}
    >
      {children}
    </div>
  );
}
