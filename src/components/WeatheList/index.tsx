import { FC, useEffect, useState } from "react"

import { useAppDispatch, useAppSelector } from "../../services/hooks"
import { Weather } from "../../store/reducers/type"
import { getForecastList } from "../../store/reducers/weatherReducer"
import { ForecastItem } from "../ForecastItem"

import classes from "./index.module.scss"

export const WeatherList: FC = () => {
  const {
    loading,
    error,
    data: forecast,
  } = useAppSelector(state => state.weathers.forecast)
  const dispatch = useAppDispatch()
  const [forecastDayList, setForecastDayList] = useState<Weather[] | []>([])

  useEffect(() => {
    if('geolocation' in navigator){
      navigator.geolocation.getCurrentPosition(position => {
        dispatch(
          getForecastList({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          }),
        )
      })
    }
    
    // eslint-disable-next-line
  }, [])

  const handleOpenTab = (key: string) => {
    if (forecast) {
      setForecastDayList([...forecast[key]])
    }
  }

  if (error) {
    return <>Smth wetn wrong ...</>
  }
  // console.log(forecast)
  return (
    <section className={classes.container}>
      <div className={classes.wrapper}> 
        <div className={classes.wtWrapper}>
          {loading ? (
            <p data-testid='loading'>loading...</p>
          ) : (
            forecast &&
            Object.entries(forecast).map(item => (
              <div
                data-testid="location"
                key={item[0]}
                className={classes.wtItem}
                onClick={() => handleOpenTab(item[0])}
              >
                <p  className={classes.title}>{item[0]}</p>
              </div>
            ))
          )}
        </div>
        <div className={classes.itemContainer}>
          {forecastDayList.length > 0
            ? forecastDayList.map(w => <ForecastItem key={w.dt} weather={w} />)
            : null}
        </div>
      </div>
    </section>
  )
}
