import { render , screen} from "@testing-library/react"
import { ForecastItem } from "."
import { weatherMockData } from "../../services/utils/testing-mocks";
import { Weather } from "../../store/reducers/type"
import { getIcon, weatherIconList, WeatherIconList, weatherIconListNigth } from './../../services/helpers/weather.helper';

describe("testing function", () => {
  const props:Weather = weatherMockData;
  it("render correctly forecast item component", () => {
    render(<ForecastItem weather={props}/>)
    expect(screen.getByText(/overcast clouds/i)).toBeInTheDocument();
  })

  it("check all icon displayed", () => {
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
  it('checked display night and day icons', ()=> {
    const iconNigth = getIcon('rain it',"2022-09-23 00:00:00")
    expect(iconNigth.icon).toBe(weatherIconListNigth[0].icon)

    const iconForDay = getIcon('rain it',"2022-09-23 11:00:00")
    expect(iconForDay.icon).toBe(weatherIconList[0].icon)
  })
})
