import { render, screen, fireEvent} from "@testing-library/react"
import { WeatherList } from "."

import { Provider } from "react-redux"
import configureStore from "redux-mock-store"
import { RootState } from "../../store"
import { forecastMockData } from "../../services/utils/testing-mocks"

describe("test weather list render", () => {
  const initialState: RootState = {
    weathers: {
      weatherData: {
        data: null,
        loading: false,
        error: false,
      },
      forecast: {
        data: forecastMockData,
        loading: false,
        error: false,
      },
    },
    citiesWeather: {
      loading: false,
      error: false,
      list: null
    }
  }
  const mockStore = configureStore()
  let store = mockStore(initialState)
  
  it("testing rendering list in component", async () => {
    render(
      <Provider store={store}>
        <WeatherList />
      </Provider>,
    )
    const list = await screen.findByRole('list');
    expect(list).toBeInTheDocument()
  })
  it('testing forecast day list', async ()=> {
    render(
      <Provider store={store}>
        <WeatherList />
      </Provider>,
    )
    expect(await screen.findByTestId('forecastDayList')).not.toBeNull()

  })
  it('snapshot Weather list', ()=>{
    const view = render(
      <Provider store={store}>
        <WeatherList />
      </Provider>,
    )
  expect(view).toMatchSnapshot()

  })
  it('testing open weather tab', ()=>{
    render(
      <Provider store={store}>
        <WeatherList />
      </Provider>,
    )
    fireEvent.click(screen.getByTestId('location'))
    expect(screen.getByTestId('location')).toHaveClass('activeItem')

    expect(screen.getByTestId('forecastDayList')).not.toBeNull()
  })

})
 
