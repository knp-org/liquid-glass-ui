import React from 'react';

export function GlassDropZone({ onDrop, children }: { onDrop?: () => void, children: React.ReactNode }) {
  return (
    <div className="glass-dropzone" onClick={onDrop}>
      {children}
    </div>
  );
}
