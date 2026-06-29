import React from 'react';
import { GlassButton } from './GlassButton';

interface GlassModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export function GlassModal({ isOpen, onClose, title, footer, children, className = '' }: GlassModalProps) {
  if (!isOpen) return null;

  return (
    <div className="glass-modal-backdrop" onClick={onClose}>
      <div className={`glass-modal ${className}`} onClick={e => e.stopPropagation()}>
        {title && (
          <div className="flex justify-between items-center mb-6">
            <h2 className="heading-medium" style={{ margin: 0 }}>{title}</h2>
            <button className="glass-btn" style={{ padding: '0.25rem 0.5rem', borderRadius: '4px' }} onClick={onClose}>✕</button>
          </div>
        )}
        <div className="text-body mb-6">
          {children}
        </div>
        {footer !== undefined ? footer : (
          <div className="flex gap-4 justify-end">
            <GlassButton onClick={onClose}>Cancel</GlassButton>
            <GlassButton variant="primary" onClick={onClose}>Confirm</GlassButton>
          </div>
        )}
      </div>
    </div>
  );
}
