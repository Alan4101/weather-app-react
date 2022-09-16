import {FC, useEffect} from 'react'
import { useAppDispatch, useAppSelector } from '../../services/hooks';
import { getCurrentWeather } from '../../store/reducers/weatherReducer';
import classes from './index.module.scss';

export const MainWeather:FC =() => {
  const dispatch = useAppDispatch();
  const {error, loading, weatherData} = useAppSelector((state)=> state.weathers)
  
  useEffect(()=>{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position) => {
        // dispatch(getCurrentWeather({lat: position.coords.latitude, lon: position.coords.longitude}))
      })
    }
  },[])
  return (
      <div className={classes.wrapper}>
        <div className={classes.content}>
          <p>container</p>
          <h1>{weatherData?.name}f</h1>
          <p>{weatherData?.main.temp}d</p>
        </div>
      </div>
  )
}
