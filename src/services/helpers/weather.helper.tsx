import { ReactElement, ReactNode } from "react"
import { Clear, Sunny, Cloudy, Rain } from "../../assets/icon/index"
import { ForecastData, IForecastList} from "../../store/reducers/type"

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
export const mock = [
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
const days = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
]

const getDayName = (date: Date) => {
    const d = new Date(date)
    return d.toLocaleDateString('en-EN', {weekday: 'long'}).toLowerCase()
}
const sortDays = () => {
    const currentDay = new Date().getDay();
    // return [...[...days].splice(currentDay), ...[...days].slice(0,currentDay)]
    return [...[...days].splice(currentDay), ...days.slice(0,currentDay)]
  }
export const createForecastList = (list: IForecastList) => {
  const forecast: ForecastData = {}

  sortDays().forEach((item: string) => {
    forecast[item] = list.list.filter(i => getDayName(i.dt_txt) === item)
  })
  Object.entries(forecast).filter(a =>
    a[1].length === 0 ? delete forecast[a[0]] : a,
  )
  return forecast
}
export const getNormalTime = (date: Date) => {
    return new Date(date).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })
}
