import { FC, useEffect } from "react"
import {
  getNormalTime,
  weatherIconList,
} from "../../services/helpers/weather.helper"
import { useAppDispatch, useAppSelector } from "../../services/hooks"
import { getForecastList } from "../../store/reducers/weatherReducer"
import classes from "./index.module.scss"

export const WeatherList: FC = () => {
  const {
    loading,
    error,
    data: forecast,
  } = useAppSelector(state => state.weathers.forecast)
  const dispatch = useAppDispatch()

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      dispatch(
        getForecastList({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        }),
      )
    })

    // eslint-disable-next-line
  }, [])

  if (error) {
    return <>Smth wetn wrong ...</>
  }
  const getIcon = (text: string) => {
    const icon = weatherIconList.filter(i =>
      text.toLowerCase().includes(i.name),
    )
    return <span>{icon[0].icon}</span>
  }
  // console.log(forecast)
  return (
    <section className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.wtWrapper}>
          {loading ? (
            <>loading...</>
          ) : (
            forecast &&
            Object.entries(forecast).map(item => (
              <div key={item[0]} className={classes.wtItem}>
                <p className={classes.title}>{item[0]}</p>
                <div className={classes.itemContainer}>
                  {item[1].map(w => (
                    <div key={w.dt} className={classes.weatherBox}>
                      <p>{getNormalTime(w.dt_txt)}</p>
                      <p className={classes.icon}>
                        {getIcon(w.weather[0].main)}
                      </p>
                      <p className={classes.degre}>
                        {Math.floor(w.main.temp)}&deg;C
                      </p>
                      <p>{w.weather[0].description}</p>
                      <p>Feels like: {Math.floor(w.main.feels_like)}&deg;C</p>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}
