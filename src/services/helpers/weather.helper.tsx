import { ReactElement, ReactNode } from "react"
import { Clear, Sunny, Cloudy, Rain } from "../../assets/icon/index"
import { ForecastData, IForecastList } from "../../store/reducers/type"

interface WeatherIconList {
  name: string
  icon: ReactNode | ReactElement
}
export const weatherIconList: WeatherIconList[] = [
  {
    name: "rain",
    icon: <Rain />,
  },
  {
    name: "sunny",
    icon: <Sunny />,
  },
  {
    name: "clouds",
    icon: <Cloudy />,
  },
  {
    name: "clear",
    icon: <Clear />,
  },
]
const days = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
]

export const getDay = (date: Date) => {
  return new Date(date).getDay()
}
export const createForecastList = (list: IForecastList) => {
  const forecast: ForecastData = {}
  days.forEach((item: string, index: number) => {
    forecast[item] = list.list.filter(item => getDay(item.dt_txt) === index)
  })

  Object.entries(forecast).filter(a =>
    a[1].length === 0 ? delete forecast[a[0]] : a,
  )
  return forecast
}
