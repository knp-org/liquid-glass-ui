import React from 'react';

export function GlassTable({ headers, rows }: { headers: string[], rows: React.ReactNode[][] }) {
  return (
    <div className="glass-table-wrapper">
      <table className="glass-table">
        <thead>
          <tr>
            {headers.map((h, i) => <th key={i}>{h}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => <td key={j}>{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
