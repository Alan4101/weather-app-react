import { FC, useEffect } from "react"
import { weatherIconList } from "../../services/helpers/weather.helper"
import { useAppDispatch, useAppSelector } from "../../services/hooks"
import { getCurrentWeather } from "../../store/reducers/weatherReducer"
import { Loader } from "../Loader"
import classes from "./index.module.scss"

export const MainWeather: FC = () => {
  const dispatch = useAppDispatch()
  const { error, loading, data: weatherData} = useAppSelector(
    state => state.weathers.weatherData,
  )

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        dispatch(
          getCurrentWeather({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          }),
        )
      })
    }
    // eslint-disable-next-line
  }, [])

  if(loading){
    return <div><Loader/></div>
  }
  
  if (error || !weatherData) {
    return <h1>Something wrong</h1>
  }

  const getIcon = () => {
    const str = weatherData.weather[0].main.toLowerCase()
    const icon = weatherIconList.filter(i => i.name.includes(str))
    return icon[0].icon
  }

  return (
    <div className={classes.content}>
      <h1 className={classes.cityTitle}>{weatherData.name}</h1>
      <p className={classes.temperatureText}>
        {Math.floor(weatherData.main.temp)}&deg;C
      </p>
      <p className={classes.text}>
        {weatherData.weather.map((w, i) => (
          <span key={i}>{w.main}</span>
        ))}
      </p>
      <p className={classes.box}>
        <span>H:{weatherData.main.humidity}%&nbsp;</span>
        <span>W:{weatherData.wind.speed}m/s</span>
      </p>
      <div className={classes.icon}>{getIcon()}</div>
    </div>
  )
}
