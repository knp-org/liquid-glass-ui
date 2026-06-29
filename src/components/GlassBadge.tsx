import React from 'react';

export function GlassBadge({ children, active = false, className = '' }: { children: React.ReactNode, active?: boolean, className?: string }) {
  return (
    <span className={`glass-badge ${active ? 'active' : ''} ${className}`}>
      {children}
    </span>
  );
}
