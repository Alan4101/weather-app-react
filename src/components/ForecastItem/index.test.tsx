import { render , screen} from "@testing-library/react"
import { ForecastItem } from "."
import { Weather } from "../../store/reducers/type"
import { getIcon } from "./index.helper"
import { WeatherIconList } from './../../services/helpers/weather.helper';

describe("testing function", () => {
  const props:Weather = {
    clouds: { all: 98 },
    dt: 1664150400,
    dt_txt: new Date("2022-09-26 00:00:00"),
    main: {
      temp: 10.66,
      feels_like: 9.95,
      temp_min: 10.66,
      temp_max: 10.66,
      pressure: 1015,
    },
    pop: 0,
    visibility: 10000,
    weather: [{ id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04n' }],
    wind: { speed: 2.76, deg: 191, gust: 5.41 },
    rain: undefined,
    indexCount: 0
  }
  it("render correctly forecast item component", () => {
    render(<ForecastItem weather={props}/>)
    expect(screen.getByText(/overcast clouds/i)).toBeInTheDocument();
  })

  it("check icon displayed", () => {
    const icon1: WeatherIconList = getIcon('Clouds')
    expect(icon1.name).toEqual('clouds')
    expect(icon1.name).not.toEqual('clear')
    
    const icon2 = getIcon('Clearly')
    expect(icon2.name).toEqual('clear')
    
    const icon3 = getIcon('Sunny')
    expect(icon3.name).toEqual('sunny')

    const icon4 = getIcon('Rain it')
    expect(icon4.name).toEqual('rain')

    const icon5 = getIcon('')
    expect(icon5.name).toEqual('default')
  })
})
