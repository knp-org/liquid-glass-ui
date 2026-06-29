"use client";

import React, { useState, useRef, useEffect } from 'react';
import { GlassButton } from './GlassButton';

interface MenuItem {
  label: React.ReactNode;
  onClick?: () => void;
  isSeparator?: boolean;
}

interface GlassDropdownProps {
  label: React.ReactNode;
  items: MenuItem[];
  className?: string;
}

export function GlassDropdown({ label, items, className = '' }: GlassDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside, { passive: true });
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <div className={`relative inline-block ${className}`} ref={dropdownRef} style={{ position: 'relative' }}>
      <GlassButton onClick={() => setIsOpen(!isOpen)}>
        {label} <span style={{ fontSize: '0.8em', marginLeft: '4px' }}>▼</span>
      </GlassButton>
      
      {isOpen && (
        <div className="glass-menu">
          {items.map((item, i) => 
            item.isSeparator ? (
              <div key={i} className="glass-menu-separator" />
            ) : (
              <button 
                key={i} 
                className="glass-menu-item"
                onClick={() => {
                  if (item.onClick) item.onClick();
                  setIsOpen(false);
                }}
              >
                {item.label}
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
}
