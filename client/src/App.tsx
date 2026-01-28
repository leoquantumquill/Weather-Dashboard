import React from 'react';
import CitySearch from './components/CitySearch';
import WeatherCard from './components/WeatherCard';
import Forecast from './components/Forecast';
import { useWeather } from './hooks/useWeather';
import './App.css';

function App() {
  const { city, setCity, units, setUnits, now, forecast } = useWeather();

  return (
    <div className="app" data-theme="dark" style={{ padding: '2rem' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>Beautiful Weather Dashboard</h1>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
        <CitySearch value={city} onChange={setCity} />
        <button onClick={() => setUnits(units === 'metric' ? 'imperial' : 'metric')} style={{ padding: '0.75rem 1rem', borderRadius: 8 }}>
          {units === 'metric' ? 'Show °F' : 'Show °C'}
        </button>
      </div>

      <div className="grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', alignItems: 'start' }}>
        <WeatherCard data={{ city: now?.city ?? city, temp: now?.temp ?? 0, description: now?.description ?? '', humidity: now?.humidity ?? 0, wind: now?.wind ?? 0, icon: now?.icon ?? '01d', units }} />
        <Forecast items={forecast} />
      </div>
    </div>
  );
}

export default App;
