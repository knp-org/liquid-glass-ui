import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  shape?: 'default' | 'pill' | 'circle' | 'square';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function GlassButton({ 
  variant = 'secondary', 
  shape = 'default', 
  size = 'md',
  children, 
  className = '', 
  style, 
  ...props 
}: ButtonProps) {
  // Ghost is a bare, surface-less button: it intentionally omits the
  // `glass-btn` base so the consumer's own classes (Tailwind utilities,
  // etc.) fully control background, padding, colour and shape. Used for
  // icon-only / transport / window controls that must not gain the glass
  // surface. Size/shape presets are skipped so nothing is forced inline.
  if (variant === 'ghost') {
    return (
      <button className={`glass-btn-ghost ${className}`} style={style} {...props}>
        {children}
      </button>
    );
  }

  let combinedStyle: React.CSSProperties = {};

  if (size === 'sm') {
    combinedStyle = { padding: '0.25rem 0.75rem', fontSize: '0.875rem' };
  } else if (size === 'lg') {
    combinedStyle = { padding: '0.75rem 1.5rem', fontSize: '1.125rem' };
  }

  if (shape === 'pill') {
    combinedStyle.borderRadius = '9999px';
  } else if (shape === 'circle' || shape === 'square') {
    combinedStyle.borderRadius = shape === 'circle' ? '50%' : '8px';
    combinedStyle.display = 'flex';
    combinedStyle.alignItems = 'center';
    combinedStyle.justifyContent = 'center';
    
    if (size === 'sm') {
      combinedStyle.width = '2rem';
      combinedStyle.height = '2rem';
      combinedStyle.padding = '0.25rem';
    } else if (size === 'lg') {
      combinedStyle.width = '3rem';
      combinedStyle.height = '3rem';
      combinedStyle.padding = '0.75rem';
    } else {
      combinedStyle.width = '2.5rem';
      combinedStyle.height = '2.5rem';
      combinedStyle.padding = '0.5rem';
    }
  }

  return (
    <button 
      className={`glass-btn ${variant !== 'secondary' ? variant : ''} ${className}`} 
      style={{ ...combinedStyle, ...style }}
      {...props}
    >
      {children}
    </button>
  );
}
