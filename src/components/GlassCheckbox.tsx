import React from 'react';

interface GlassCheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export function GlassCheckbox({ label, className = '', ...props }: GlassCheckboxProps) {
  return (
    <label className={`glass-checkbox-container ${className}`}>
      <input type="checkbox" {...props} />
      <div className="glass-checkbox"></div>
      {label && <span className="text-body">{label}</span>}
    </label>
  );
}
