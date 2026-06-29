import React from 'react';

export function GlassProgress({ progress }: { progress: number }) {
  return (
    <div className="glass-progress-container">
      <div className="glass-progress-bar" style={{ width: `${progress}%` }}></div>
    </div>
  );
}
