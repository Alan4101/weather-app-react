import { configureStore } from "@reduxjs/toolkit";
import weatherCitiesReducer from "./reducers/weatherCities";
import weatherReducer from "./reducers/weatherReducer";

export const store = configureStore({
    reducer: {
        weathers: weatherReducer,
        citiesWeather: weatherCitiesReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;