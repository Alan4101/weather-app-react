import { FC , useEffect} from "react"
import { weatherIconList } from "../../services/helpers/weather.helper"
import { useAppDispatch, useAppSelector } from "../../services/hooks"
import { getForecastList } from "../../store/reducers/weatherReducer"
import classes from "./index.module.scss"

export const WeatherList: FC = () => {
  const { loading, error, data: forecast } = useAppSelector((state=> state.weathers.forecast))
  const dispatch = useAppDispatch();

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(position => {
      dispatch(
        getForecastList({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        }),
      )
    })
    // eslint-disable-next-line
  },[])
  console.log(forecast)
  const mock = [
    {
      title: "Monday",
      icon: weatherIconList[1].icon,
      degre: 15,
    },
    {
      title: "Thurdsday",
      icon: weatherIconList[0].icon,
      degre: 11,
    },
    {
      title: "Monday",
      icon: weatherIconList[1].icon,
      degre: 18,
    },
    {
      title: "Monday",
      icon: weatherIconList[1].icon,
      degre: 20,
    },
    {
      title: "Friday",
      icon: weatherIconList[2].icon,
      degre: 17,
    },
    {
      title: "Suturday",
      icon: weatherIconList[3].icon,
      degre: 15,
    },
    {
      title: "Sanday",
      icon: weatherIconList[0].icon,
      degre: 13,
    },
  ]

  return (
    <section className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.wtWrapper}>
          {mock.map((i, index) => (
            <div key={index} className={classes.wtItem}>
              <p className={classes.title}>{i.title}</p>
              <p className={classes.icon}>{i.icon}</p>
              <p className={classes.degre}>{i.degre}&deg;C</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
