import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  containerClassName?: string;
}

export function GlassInput({ label, className = '', containerClassName = '', ...props }: InputProps) {
  return (
    <div className={`flex flex-col gap-2 ${containerClassName}`}>
      {label && <label className="text-muted">{label}</label>}
      <input className={`glass-input ${className}`.trim()} {...props} />
    </div>
  );
}
