import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { http } from "../../services/httpClient/httpClient"
import { AddToCacheData} from "../../services/utils/utils"
import { IWeatherData, RequestWeather } from "./type"

type Cities = IWeatherData

interface CitiesList {
  list: Cities[] | null
  loading: boolean
  error: boolean
}
const initialState: CitiesList = {
  list: null,
  loading: false,
  error: false,
}
interface RequestCityWeather extends Partial<RequestWeather> {
  q: string
}

export const getWeatherForOneCity = createAsyncThunk(
  "citiesWeather/getWeatherForOneCity",
  async (option: RequestCityWeather, { rejectWithValue }) => {
    try {
      const responce = await http.get<RequestCityWeather, Cities>({
        url: "weather?",
        param: {
          q: option.q,
          appid: process.env.REACT_APP_WEATHER_KEY,
          units: "metric",
        },
      })

      return responce
    } catch (error: any) {
      return rejectWithValue(error.response.data.message)
    }
  },
)

const weatherCitiesReducer = createSlice({
  name: "weatherCities",
  initialState,
  reducers: {
    cleanList(state) {
      state.list = null
    },
  },
  extraReducers: reducersBuilder => {
    reducersBuilder.addCase(getWeatherForOneCity.pending, state => {
      state.loading = true
      state.error = false
    })
    reducersBuilder.addCase(getWeatherForOneCity.rejected, state => {
      state.loading = false
      state.error = true
    })
    reducersBuilder.addCase(
      getWeatherForOneCity.fulfilled,
      (state, { payload }) => {
        state.error = false
        state.loading = false
        state.list = state.list?.length ? [...state.list, payload] : [payload]
        const citiesNameList = state.list.length
          ? [...state.list.slice().map(i => i.name), payload.name]
          : [payload.name]
          const uq = new Set(citiesNameList)
        AddToCacheData("CitiesWeather", "cities", Array.from(uq).join(", "))
      },
    )
  },
})
export const { cleanList } = weatherCitiesReducer.actions
export default weatherCitiesReducer.reducer
