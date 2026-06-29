import React from 'react';

interface GlassAlertProps {
  children: React.ReactNode;
  variant?: 'info' | 'success' | 'warning' | 'error';
  className?: string;
}

export function GlassAlert({ children, variant = 'info', className = '' }: GlassAlertProps) {
  return (
    <div className={`glass-alert ${variant} ${className}`}>
      {children}
    </div>
  );
}
