import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { http } from "../../services/httpClient/httpClient"
import { IForecastList, IWeatherData } from "./type"

const appId = process.env.REACT_APP_WEATHER_KEY

interface WeatherState {
  forecast: {
    data: IForecastList | null,
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
type UnitsType = "standart" | "metric" | "imperial"

interface GetResponceCurrentWeather extends IWeatherData {}

interface ResponceForecast extends IForecastList {}

interface RequestWeather {
  lat: number
  lon: number
  appid?: string | undefined
  exclude?: string
  units?: UnitsType
  lang?: string
}

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
  extraReducers: reducersBulder => {
    reducersBulder.addCase(getCurrentWeather.rejected, state => {
      state.weatherData.loading = true
      state.weatherData.error = true
    })
    reducersBulder.addCase(getCurrentWeather.pending, state => {
      state.weatherData.loading = true
      state.weatherData.error = false
    })
    reducersBulder.addCase(
      getCurrentWeather.fulfilled,
      (state, { payload }) => {
        state.weatherData.data = payload
      },
    )
    reducersBulder.addCase(getForecastList.pending, state => {
      state.forecast.loading = true
      state.forecast.error = false
    })
    reducersBulder.addCase(getForecastList.rejected, state => {
      state.forecast.loading = false
      state.forecast.error = true
    })
    reducersBulder.addCase(getForecastList.fulfilled, (state, { payload }) => {
      state.forecast.loading = false
      state.forecast.error = false
      state.forecast.data = payload
    })
  },
})

export default weatherReducer.reducer
