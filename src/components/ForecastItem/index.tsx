import { FC } from "react"
import { getNormalTime } from "../../services/helpers/weather.helper"
import { Weather } from "../../store/reducers/type"
import { getIcon } from "./index.helper"

import classes from "./index.module.scss"

export const ForecastItem: FC<{ weather: Weather }> = props => {
  const { dt_txt, weather, main } = props.weather
  return (
    <div className={classes.weatherBox}>
      <p>{getNormalTime(dt_txt)}</p>
      <p className={classes.icon}>{getIcon(weather[0].main).icon}</p>
      <p className={classes.degre}>{Math.floor(main.temp)}&deg;C</p>
      <p>{weather[0].description}</p>
      <p>Feels like: {Math.floor(main.feels_like)}&deg;C</p>
    </div>
  )
}