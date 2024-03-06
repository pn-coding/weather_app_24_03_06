import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
  params: {
    appid: "c0d2fa1aa8da5aaa1f03a56e5f10f5c4",
    units: "metric",
    lang: "kr",
  },
});

export const getWeather = () => {
  const lat = 37.57940843688738;
  const lon = 126.96036830361804;

  return instance.get(`weather?lat=${lat}&lon=${lon}`).then((res) => res.data);
};
