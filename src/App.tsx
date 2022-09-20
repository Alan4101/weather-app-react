import { FC} from 'react';
import './App.scss';
import { MainWeather, WeatherList } from './components';
export const App:FC = () => {
  return (
    <div className="App">
      {/* <video preload='auto' autoPlay={true}>
        <source type='video/mp4' src='/video.mp4'/>
      </video> */}
      <div className='mainWrapper'>
        <div className='weather__container'>
          <MainWeather/>
        </div>
        <div className='daily__container'>
          <WeatherList/>
        </div>
      </div>
    </div>
  );
}

