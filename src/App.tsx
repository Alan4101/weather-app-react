import { FC} from 'react';
import './App.scss';
import { Home } from './pages';

export const App:FC = () => {
  return (
    <div className="App">
      <video className='video-bg' autoPlay muted loop>
          <source type='video/mp4' src='/cloudy.mp4'/>
        </video>
      <div className='mainWrapper'>
        <Home/>
      </div>
    </div>
  );
}

