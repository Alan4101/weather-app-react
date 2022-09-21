import { WeatherIconList, weatherIconList } from "../../services/helpers/weather.helper"

export const getIcon = (text: string): WeatherIconList => {
  if(text.length === 0){
    return weatherIconList[weatherIconList.length - 1]
  }
  const icon = weatherIconList.filter(i =>
    text.toLowerCase().includes(i.name),
  )
  return icon[0]
}