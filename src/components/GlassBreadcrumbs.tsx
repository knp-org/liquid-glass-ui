import React from 'react';

export function GlassBreadcrumbs({ items }: { items: string[] }) {
  return (
    <div className="glass-breadcrumbs">
      {items.map((item, i) => (
        <React.Fragment key={i}>
          <span className={`glass-breadcrumb-item ${i === items.length - 1 ? 'active' : ''}`}>{item}</span>
          {i < items.length - 1 && <span className="glass-breadcrumb-separator">/</span>}
        </React.Fragment>
      ))}
    </div>
  );
}
