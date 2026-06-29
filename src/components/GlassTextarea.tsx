import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export function GlassTextarea({ label, className = '', ...props }: TextareaProps) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && <label className="text-muted">{label}</label>}
      <textarea className="glass-textarea" {...props} />
    </div>
  );
}
