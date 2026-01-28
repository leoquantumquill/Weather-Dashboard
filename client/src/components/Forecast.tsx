import React from 'react';

type Item = {
  date: string;
  min: number;
  max: number;
  icon: string;
  description: string;
};

export default function Forecast({ items }: { items: Item[] }) {
  if (!items || items.length === 0) return <div className="card">No forecast data</div>;

  return (
    <div className="card" aria-label="Forecast" style={{ padding: '1rem' }}>
      <h3 style={{ marginTop: 0 }}>5-Day Forecast</h3>
      <div style={{ display: 'flex', gap: '0.75rem', overflowX: 'auto' }}>
        {items.map((it, idx) => (
          <div key={idx} style={{ minWidth: 120, textAlign: 'center' }} className="forecast-item">
            <div style={{ fontSize: '0.9rem', color: '#9fb3d9' }}>{it.date}</div>
            <img
              src={`https://openweathermap.org/img/wn/${it.icon}@2x.png`}
              alt={it.description}
              width={56}
              height={56}
            />
            <div>
              <strong>
                {Math.round(it.max)}° / {Math.round(it.min)}°
              </strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
