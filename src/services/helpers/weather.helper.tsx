import { ReactElement, ReactNode } from "react"
import { Clear, Sunny, Cloudy, Rain, NiogthClear, NigthCloudy, NigthRain, RainAndTunder } from "../../assets/icon/index"
import { ForecastData, IForecastList} from "../../store/reducers/type"

export interface WeatherIconList {
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
  {
    name: 'heavy rain',
    icon: <RainAndTunder/>
  },
  {
    name: 'default',
    icon: <Cloudy />
  },
]
export const weatherIconListNigth: WeatherIconList[] = [
  {
    name: "rain",
    icon: <NigthRain />,
  },
  {
    name: "clouds",
    icon: <NigthCloudy />,
  },
  {
    name: "clear",
    icon: <NiogthClear />,
  },
  {
    name: 'default',
    icon: <Cloudy />
  },
]

export const days = [
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
export const sortDays = (currentDayArg?: number) => {
  const currentDay = currentDayArg ? currentDayArg: new Date().getDay();
    if( currentDay === 0 || currentDayArg === 0){
      return days.slice();
    }
    return [...[...days].splice(currentDay), ...days.slice(0,currentDay)]
  }
export const createForecastList = (list: IForecastList) => {
  const forecast: ForecastData = {}

  sortDays().forEach((item: string) => {
    forecast[item] = list.list.filter(i => getDayName(i.dt_txt) === item)
  })
  Object.entries(forecast).filter(([k,v])=> v.length === 0 ? delete forecast[k] : k)
  return  forecast
}
export const getNormalTime = (date: Date) => {
    return new Date(date).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })
}

// text - name kind for weather, time - time
export const getIcon = (text: string, time?: Date): WeatherIconList => {
  if (text.length === 0) {
    return weatherIconList[weatherIconList.length - 1]
  }
  if (time) {
    let t = new Date(time).getHours()
    if (t >= 6 && t <= 22) {
      return weatherIconList.filter(i => text.toLowerCase().includes(i.name))[0]
    } else {
      return weatherIconListNigth.filter(i =>
        text.toLowerCase().includes(i.name),
      )[0]
    }
  } else {
    return weatherIconList.filter(i => text.toLowerCase().includes(i.name))[0]
  }
}

