import React from 'react';

export function GlassSkeleton({ width = '100%', height = '20px', className = '' }: { width?: string, height?: string, className?: string }) {
  return (
    <div className={`glass-skeleton ${className}`} style={{ width, height }}></div>
  );
}
