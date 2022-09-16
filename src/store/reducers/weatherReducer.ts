import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { http } from '../../services/httpClient/httpClient';
import { IWeatherData } from './type';

const appId = process.env.REACT_APP_WEATHER_KEY



interface WeatherState  {
    weatherData: IWeatherData | null;
    loading: boolean;
    error: boolean | string;
}
const initialState: WeatherState = {
    weatherData: null,
    error: false,
    loading: false,

}
type UnitsType = 'standart' | 'metric' | 'imperial';

interface GetResponceCurrentWeather extends IWeatherData {

}
interface GetRequestCurrentWeather {
    lat: number;
    lon: number;
    appid?: string | undefined;
    exclude?: string;
    units?: UnitsType,
    lang?: string;
}

export const getCurrentWeather = createAsyncThunk('weather/getCurrentWeather', async (options: GetRequestCurrentWeather, { rejectWithValue }) => {
    try {
        console.log(appId)
        return await http.get<GetRequestCurrentWeather, GetResponceCurrentWeather >({
            url: 'weather/?',
            param: {
                lat: options.lat,
                lon: options.lon,
                appid: appId,
                units: 'metric',
            }
        });

    } catch (error: any) {
        return rejectWithValue(error.response.data.message);
    }
})
const weatherReducer = createSlice({
    name: 'weather',
    initialState,
    reducers: {},
    extraReducers:(reducersBulder) =>{
        reducersBulder.addCase(getCurrentWeather.rejected, (state)=>{
            state.loading = true;
            state.error = true;
        })
        reducersBulder.addCase(getCurrentWeather.pending, (state)=> {
            state.loading = true;
            state.error = false;
        })
        reducersBulder.addCase(getCurrentWeather.fulfilled, (state, {payload})=>{
            state.weatherData = payload;
        })
    }

})

export default weatherReducer.reducer;