import { FC } from "react"
import { IWeatherData } from './../../store/reducers/type';

type CityCardProps = IWeatherData

export const CityCard: FC<CityCardProps> = (props) => {
const {name, weather, main} = props;  
  return (
    <div>
      <h1>{name}</h1>
      {weather.map(i=>(
        <p key={i.id}>{i.main}</p>
      ))}
      <p>{main.temp}</p>
    </div>
  )
}
