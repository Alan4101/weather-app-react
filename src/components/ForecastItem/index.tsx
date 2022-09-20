import { FC } from "react";
import { getNormalTime, weatherIconList } from "../../services/helpers/weather.helper";
import { Weather } from "../../store/reducers/type";
import classes from "./index.module.scss"

interface ForecastListProps{
  weather: Weather;
}
export const ForecastItem: FC<ForecastListProps> = ({weather}) => {
  const getIcon = (text: string) => {
    const icon = weatherIconList.filter(i =>
      text.toLowerCase().includes(i.name),
    )
    return <span>{icon[0].icon}</span>
  }
  return (
    <div className={classes.weatherBox}>
      <p>{getNormalTime(weather.dt_txt)}</p>
      <p className={classes.icon}>{getIcon(weather.weather[0].main)}</p>
      <p className={classes.degre}>{Math.floor(weather.main.temp)}&deg;C</p>
      <p>{weather.weather[0].description}</p>
      <p>Feels like: {Math.floor(weather.main.feels_like)}&deg;C</p>
    </div>
  )
}
