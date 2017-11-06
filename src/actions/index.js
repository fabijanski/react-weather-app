import axios from 'axios';

const API_KEY = 'f36d9a0e165a41f150e553a7d30f7886';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},pl`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}