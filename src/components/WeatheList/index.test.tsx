import {render,} from '@testing-library/react'
// import {screen } from '@testing-library/dom'
import { WeatherList } from '.'

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { RootState } from '../../store'

describe('test weather list render', ()=>{
  const initialState: RootState = {
    weathers: {
      weatherData: {
        data: null,
        loading: false,
        error: false,
      },
      forecast: {
        data: null,
        loading: false,
        error: false,
      },
    }
  }
  const mockStore = configureStore()
  let store = mockStore(initialState)
  render(<Provider store={store}><WeatherList/></Provider>)

  it('testing rendering component', async()=>{
   
  })
})