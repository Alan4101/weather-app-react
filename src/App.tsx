import { FC} from 'react';
import './App.scss';
import { MainWeather, WeatherList } from './components';

export const App:FC = () => {
  return (
    <div className="App">
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

