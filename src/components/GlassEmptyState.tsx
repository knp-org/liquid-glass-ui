import React from 'react';

export function GlassEmptyState({ icon, title, description, action }: { icon: React.ReactNode, title: string, description: string, action?: React.ReactNode }) {
  return (
    <div className="glass-empty-state">
      <div style={{ fontSize: '3rem', marginBottom: '1rem', opacity: 0.5 }}>{icon}</div>
      <h3 className="heading-small">{title}</h3>
      <p className="text-body mb-4">{description}</p>
      {action}
    </div>
  );
}
