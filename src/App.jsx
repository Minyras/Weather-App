import { useEffect, useRef, useState } from "react";
import "./App.css";
import { getWeather } from "./server/weather";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";

function App() {
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const cityRef = useRef();

  useEffect(() => {
    getWeather(setWeather, "Baku", setLoading);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeather(setWeather, cityRef.current.value, setLoading);
  };

  return (
    <div className="App">
      <Content isLoading={loading} weather={weather} />
      <Sidebar
        isLoading={loading}
        handleSubmit={handleSubmit}
        cityRef={cityRef}
        weather={weather}
      />
    </div>
  );
}

export default App;
