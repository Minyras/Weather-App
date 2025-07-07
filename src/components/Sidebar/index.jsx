/* eslint-disable react/prop-types */
import City from "../City";
import Detail from "../Detail";
import Form from "../Form";
import style from "./sidebar.module.scss";
import { v4 as uuidv4 } from "uuid";

const cities = ["Birmingham", "Manchester", "New York", "California"];

const Sidebar = ({ isLoading, handleSubmit, cityRef, weather }) => {
  return (
    <aside>
      <Form handleSubmit={handleSubmit} cityRef={cityRef} />
      <div className={style.cities}>
        {cities.map((city) => {
          return <City name={city} key={uuidv4()} />;
        })}
      </div>
      <div className={style.weatherDetails}>
        <h4>Weather Details</h4>
        <div className={style.details}>
          {Object.keys(weather).length === 0 || isLoading ? (
            <h1>Loading...</h1>
          ) : (
            <>
              <Detail
                weatherKey="Cloudy"
                weatherValue={`${weather.clouds.all}%`}
              />
              <Detail
                weatherKey="Humidity"
                weatherValue={`${weather.main.humidity}%`}
              />
              <Detail
                weatherKey="Wind"
                weatherValue={`${weather.wind.speed.toFixed(0)}km/h`}
              />
              <Detail
                weatherKey="Rain"
                weatherValue={`${
                  weather.rain != undefined ? weather.rain["1h"] : "0"
                }mm`}
              />
            </>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
