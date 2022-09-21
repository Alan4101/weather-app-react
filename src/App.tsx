import { FC} from 'react';
import './App.scss';
import { MainWeather, WeatherList } from './components';
export const App:FC = () => {
  return (
    <div className="App">
      {/* <video className='video-bg' autoPlay muted>
          <source type='video/mp4' src='/cloudy.mp4'/>
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

