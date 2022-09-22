import { FC } from "react";
import { MainWeather, WeatherList } from "../../components";
import  "./index.module.scss"

export const Home:FC = () => {
  return (
    <>
    <div className='weather__container'>
          <MainWeather/>
        </div>
        <div className='daily__container'>
          <WeatherList/>
        </div>
    </>
  )
}