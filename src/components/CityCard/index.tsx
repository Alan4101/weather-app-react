import { FC } from "react"
import { IWeatherData } from './../../store/reducers/type';
// import classes from "./index.module.scss"


export const CityCard: FC<IWeatherData> = (props) => {
const {name, weather, main} = props 
// as Pick<Weather, keyof IWeatherData>
  return (
    <div>
      <h1>{name}</h1>
      {/* <ForecastItem {...props as Weather}/> */}
      {weather.map(i=>(
        <p key={i.id}>{i.main}</p>
      ))}
      <p>{main.temp}</p>
    </div>
  )
}
