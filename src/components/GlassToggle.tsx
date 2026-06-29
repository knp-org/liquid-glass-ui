import React from 'react';

interface GlassToggleProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export function GlassToggle({ label, className = '', ...props }: GlassToggleProps) {
  return (
    <label className={`glass-toggle ${className}`}>
      <input type="checkbox" {...props} />
      <div className="glass-toggle-track">
        <div className="glass-toggle-thumb"></div>
      </div>
      {label && <span className="text-body">{label}</span>}
    </label>
  );
}
