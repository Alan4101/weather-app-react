import { FC, useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../services/hooks"
import { Weather } from "../../store/reducers/type"
import { getForecastList } from "../../store/reducers/weatherReducer"
import { ForecastItem } from "../ForecastItem"
import { Loader } from "../Loader"

import classes from "./index.module.scss"

export const WeatherList: FC = () => {
  const {
    loading,
    error,
    data: forecast,
  } = useAppSelector(state => state.weathers.forecast)
  const dispatch = useAppDispatch()
  const [forecastDayList, setForecastDayList] = useState<Weather[] | []>([])
  const [isActiveItems, setIsActiveItems] = useState(Array(6).fill(false, 0, 6))

  useEffect(() => {
    if('geolocation' in navigator){
      navigator.geolocation.getCurrentPosition(position => {
        dispatch(
          getForecastList({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          })
        )
        const temp = [...isActiveItems]
        temp.splice(0, 1, true);
        setIsActiveItems(temp)
      })
    }
    // eslint-disable-next-line
  }, [])

  useEffect(()=>{
    if(forecast){
      setForecastDayList(Object.values(forecast)[0])
    }
  },[forecast])

  const handleOpenTab = (key: string, index: number) => {
    if (forecast) {
      setForecastDayList([...forecast[key]])
      const temp = [...isActiveItems]
      setIsActiveItems([...temp.map((_, i)=> i===index? temp[i] = !isActiveItems[i]: temp[i] = false)])
    }
  }

  if(loading){
    return <div><Loader/></div>
  }

  if (error) {
    return <>Smth wetn wrong ...</>
  }

  return (
    <section className={classes.container}>
      <div className={classes.wrapper}> 
        <div className={classes.wtWrapper}>
          {
            forecast &&
            Object.entries(forecast).map((item, index) => (
              <button
                role='list'
                data-testid="location"
                key={item[0]}
                className={[classes.wtItem, isActiveItems[index] ? classes.activeItem: ''].join(' ')}
                onClick={() => handleOpenTab(item[0], index)}
              >
                <p  className={classes.title}>{item[0]}</p>
              </button>
            ))
          }
        </div>
        <div className={classes.itemContainer} data-testid="forecastDayList">
          {forecastDayList.length > 0
            ? forecastDayList.map(w => <ForecastItem key={w.dt} weather={w}/>)
            : null}
        </div>
      </div>
    </section>
  )
}
