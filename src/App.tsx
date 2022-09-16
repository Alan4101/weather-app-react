import { FC} from 'react';
import './App.scss';
import { MainWeather } from './components';

export const App:FC = () => {
  return (
    <div className="App">
      <div className='mainWrapper'>
          <MainWeather/>
      </div>
    </div>
  );
}

