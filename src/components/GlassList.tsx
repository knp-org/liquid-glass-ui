import React from 'react';

export function GlassList({ children }: { children: React.ReactNode }) {
  return <div className="glass-list">{children}</div>;
}

export function GlassListItem({ children }: { children: React.ReactNode }) {
  return <div className="glass-list-item">{children}</div>;
}
