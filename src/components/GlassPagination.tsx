import React from 'react';

interface GlassPaginationProps {
  current: number;
  total: number;
  onChange?: (page: number) => void;
  className?: string;
}

export function GlassPagination({ current, total, onChange, className = '' }: GlassPaginationProps) {
  const pages = Array.from({ length: total }, (_, i) => i + 1);
  return (
    <div className={`glass-pagination ${className}`}>
      <button 
        className="glass-page-btn" 
        onClick={() => onChange?.(Math.max(1, current - 1))}
        disabled={current <= 1}
      >
        &lt;
      </button>
      {pages.map(p => (
        <button 
          key={p} 
          className={`glass-page-btn ${p === current ? 'active' : ''}`}
          onClick={() => onChange?.(p)}
        >
          {p}
        </button>
      ))}
      <button 
        className="glass-page-btn"
        onClick={() => onChange?.(Math.min(total, current + 1))}
        disabled={current >= total}
      >
        &gt;
      </button>
    </div>
  );
}
