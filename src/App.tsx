import { FC, useEffect, useState } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './services/hooks';
import { getGeolocation } from './services/utils/utils';
import { getCurrentWeather } from './store/reducers/weatherReducer';
type GeolacationType = {
  lat: number,
  lon: number
}
export const App:FC =() => {
  const [pos, setPos] = useState<GeolacationType | string>("");

  const dispatch = useAppDispatch();
  const {error, loading, weatherData} = useAppSelector((state)=> state.weathers)
  
  useEffect(()=>{
    
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position) => {
        dispatch(getCurrentWeather({lat: position.coords.latitude, lon: position.coords.longitude}))
      })
    }
  },[])

  console.log(weatherData)
  
  return (
    <div className="App">
      <header className="App-header">
        <p>home</p>
      </header>
    </div>
  );
}

