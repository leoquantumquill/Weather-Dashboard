import React from 'react';

type Props = {
  data: {
    city: string;
    temp: number;
    description: string;
    humidity: number;
    wind: number;
    icon: string;
    units: 'metric' | 'imperial';
  } | null;
};

export default function WeatherCard({ data }: Props) {
  if (!data) return <div className="card" style={{ gridColumn: '1 / -1' }}>Loading...</div>;

  const unitSymbol = data.units === 'metric' ? '°C' : '°F';
  const iconUrl = `https://openweathermap.org/img/wn/${data.icon}@2x.png`;

  return (
    <div className="card" style={{ padding: '1.25rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <img src={iconUrl} alt={data.description} width={72} height={72} />
      <div>
        <h2 style={{ margin: 0 }}>{data.city}</h2>
        <div style={{ fontSize: '2rem', fontWeight: 600 }}>
          {Math.round(data.temp)}{unitSymbol}
        </div>
        <div style={{ color: '#9fb3d9' }}>{data.description}</div>
        <div style={{ marginTop: '4px', fontSize: '0.9rem' }}>
          Humidity: {data.humidity}% • Wind: {data.wind} m/s
        </div>
      </div>
    </div>
  );
}
