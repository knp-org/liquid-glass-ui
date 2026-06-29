import React from 'react';

export function GlassSearch(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="glass-search-wrapper">
      <span className="glass-search-icon" style={{ display: 'flex' }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </span>
      <input type="search" className="glass-search-input" {...props} />
    </div>
  );
}
