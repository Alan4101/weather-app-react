import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { http } from '../../services/httpClient/httpClient';

const appId = process.env.APP_WEATHER_KEY;

interface IWeather{
     
}

interface WeatherState  {
    weatherData: IWeather;
    loading: boolean;
    error: boolean | string;
    
}
const initialState: WeatherState = {
    weatherData: {},
    error: false,
    loading: false,

}
type UnitsType = 'standart' | 'metric' | 'imperial';


interface GetResponceCurrentWeather extends IWeather {

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
        return await http.get<GetRequestCurrentWeather, GetResponceCurrentWeather >({
            url: 'https://api.openweathermap.org/data/2.5/weather/?',
            param: {
                lat: options.lat,
                lon: options.lon,
                appid: '4e59f701f39103bf17d031ad20a884ce',
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