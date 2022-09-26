import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { createForecastList } from "../../services/helpers/weather.helper";
import { http } from "../../services/httpClient/httpClient"
import { ForecastData, IForecastList, IWeatherData, RequestWeather } from "./type"

const appId = process.env.REACT_APP_WEATHER_KEY

interface WeatherState {
  forecast: {
    data: ForecastData | null,
    loading: boolean;
    error: boolean;
  },
  weatherData: {
    data: IWeatherData | null,
    loading: boolean;
    error: boolean;
  }
}
const initialState: WeatherState = {
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


interface GetResponceCurrentWeather extends IWeatherData {}

interface ResponceForecast extends IForecastList {}


export const getCurrentWeather = createAsyncThunk(
  "weather/getCurrentWeather",
  async (options: RequestWeather, { rejectWithValue }) => {
    try {
      return await http.get<RequestWeather, GetResponceCurrentWeather>({
        url: "weather/?",
        param: {
          lat: options.lat,
          lon: options.lon,
          appid: appId,
          units: "metric",
        },
      })
    } catch (error:any) {
      return rejectWithValue(error.response.data.message)
    }
  },
)

export const getForecastList = createAsyncThunk(
  "weather/getForecastList",
  async (options: RequestWeather, { rejectWithValue }) => {
    try {
      return await http.get<RequestWeather, ResponceForecast>({
        url: "forecast?",
        param: {
          lat: options.lat,
          lon: options.lon,
          appid: appId,
          units: "metric",
        },
      })
    } catch (error: any) {
      return rejectWithValue(error.responce.data.message)
    }
  },
)

const weatherReducer = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: reducersBuilder => {
    reducersBuilder.addCase(getCurrentWeather.rejected, state => {
      state.weatherData.loading = true
      state.weatherData.error = true
    })
    reducersBuilder.addCase(getCurrentWeather.pending, state => {
      state.weatherData.loading = true
      state.weatherData.error = false
    })
    reducersBuilder.addCase(
      getCurrentWeather.fulfilled,
      (state, { payload }) => {
        state.weatherData.loading = false
        state.weatherData.error = false
        state.weatherData.data = payload
      },
    )
    reducersBuilder.addCase(getForecastList.pending, state => {
      state.forecast.loading = true
      state.forecast.error = false
    })
    reducersBuilder.addCase(getForecastList.rejected, state => {
      state.forecast.loading = false
      state.forecast.error = true
    })
    reducersBuilder.addCase(getForecastList.fulfilled, (state, { payload }) => {
      state.forecast.loading = false
      state.forecast.error = false
      state.forecast.data = createForecastList(payload) 
    })
  },
})

export default weatherReducer.reducer
