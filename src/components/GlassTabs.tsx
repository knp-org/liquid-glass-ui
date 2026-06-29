import React from 'react';

interface Tab {
  label: string;
  value: string;
}

interface GlassTabsProps {
  tabs: Tab[];
  activeTab: string;
  onChange: (value: string) => void;
  className?: string;
}

export function GlassTabs({ tabs, activeTab, onChange, className = '' }: GlassTabsProps) {
  return (
    <div className={`glass-tabs ${className}`}>
      {tabs.map((tab) => (
        <div 
          key={tab.value}
          className={`glass-tab ${activeTab === tab.value ? 'active' : ''}`}
          onClick={() => onChange(tab.value)}
        >
          {tab.label}
        </div>
      ))}
    </div>
  );
}
