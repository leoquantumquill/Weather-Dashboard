import { useEffect, useState } from 'react';
import axios from 'axios';

type WeatherNow = {
  city: string;
  temp: number;
  description: string;
  humidity: number;
  wind: number;
  icon: string;
  units: 'metric' | 'imperial';
};

type ForecastItem = {
  date: string;
  min: number;
  max: number;
  icon: string;
  description: string;
};

export function useWeather() {
  const [city, setCity] = useState<string>('New York');
  const [units, setUnits] = useState<'metric' | 'imperial'>('metric');
  const [now, setNow] = useState<WeatherNow | null>(null);
  const [forecast, setForecast] = useState<ForecastItem[]>([]);
  const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;

  async function fetchWeather(c: string) {
    const base = 'https://api.openweathermap.org/data/2.5';
    try {
      const [curRes, fiveRes] = await Promise.all([
        axios.get(`${base}/weather`, {
          params: { q: c, units, appid: apiKey },
        }),
        axios.get(`${base}/forecast`, {
          params: { q: c, units, cnt: 5, appid: apiKey },
        }).catch(() => null),
      ]);
      const cur = curRes.data;
      setNow({
        city: cur.name,
        temp: cur.main.temp,
        description: cur.weather[0].description,
        humidity: cur.main.humidity,
        wind: cur.wind.speed,
        icon: cur.weather[0].icon,
        units,
      });
      if (fiveRes && fiveRes.data && fiveRes.data.list) {
        const f = fiveRes.data.list.map((d: any) => ({
          date: new Date(d.dt * 1000).toDateString(),
          min: d.main.temp_min,
          max: d.main.temp_max,
          icon: d.weather[0].icon,
          description: d.weather[0].description,
        }));
        setForecast(f);
      }
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    fetchWeather(city);
    // eslint-disable-next-line
  }, [city, units]);

  return { city, setCity, units, setUnits, now, forecast };
}
