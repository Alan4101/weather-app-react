import { FC } from "react"
import { getIcon, getNormalTime } from "../../services/helpers/weather.helper"
import { Weather } from "../../store/reducers/type"

import classes from "./index.module.scss"

export const ForecastItem: FC<{ weather: Weather }> = props => {
  const { dt_txt, weather, main,} = props.weather
  return (
    <div className={classes.weatherBox}>
       {/* {props.weather.name ?<p>{props.weather.name}</p> : null} */}
      <p className={classes.icon}>{getIcon(weather[0].main, dt_txt).icon}</p>
      <div className={classes.descriptionBox}>
        <p>{getNormalTime(dt_txt)}</p>
        <p className={classes.description}>{weather[0].description}</p>
      </div>
      <div className={classes.temperatureBox}>
        <p className={classes.degre}>{Math.floor(main.temp)}&deg;C</p>
        <p>Feels like: {Math.floor(main.feels_like)}&deg;C</p>
      </div>
    </div>
  )
}
