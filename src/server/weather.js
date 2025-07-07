import axios from "axios";

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

let apiKey = import.meta.env.VITE_API_KEY;

export async function getWeather(setState, city = "Baku", setLoading) {
  setLoading(true);
  try {
    const { data } = await axios.get(`${BASE_URL}?q=${city}&appid=${apiKey}`);
    setState(data);
    setLoading(false);
    return data;
  } catch (error) {
    console.log(error);
    setLoading(false);
  }
}
