/* eslint-disable no-constant-condition */
/* eslint-disable react/prop-types */
import style from "./content.module.scss";

const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const Content = ({ isLoading, weather }) => {
  let date = new Date();
  const year = date.getFullYear();
  console.log(weather, isLoading);
  return (
    <div className={style.content}>
      <h4>the.weather</h4>
      <div className={style.weatherInfo}>
        {Object.keys(weather).length === 0 || isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <h1>{(weather["main"]["temp"] - 273.15).toFixed(0)}°</h1>
            <div className={style.weather}>
              <div className={style.cityTime}>
                <h2>{weather.name}</h2>
                <p>{`${date.getHours()}:${date.getMinutes()} - ${
                  weekday[date.getDay()]
                }, ${date.getDate()} ${months[date.getMonth()]} '${
                  year.toString()[2] + year.toString()[3]
                }`}</p>
              </div>
              <div className={style.condition}>
                <img
                  src={`https://openweathermap.org/img/wn/${weather["weather"][0]["icon"]}@2x.png`}
                  alt="Weather condition"
                />
                <p>{weather.weather[0].main}</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Content;
