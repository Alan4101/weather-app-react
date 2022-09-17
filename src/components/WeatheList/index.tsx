import {FC} from 'react'
import { weatherIconList } from '../../services/helpers/weather.helper';
import classes from './index.module.scss';

export const WeatherList: FC =() => {

  const mock = [
    {
      title : 'Monday',
      icon: weatherIconList[1].icon,
      degre: 15
    },
    {
      title : 'Thurdsday',
      icon: weatherIconList[0].icon,
      degre: 11
    },
    {
      title : 'Monday',
      icon: weatherIconList[1].icon,
      degre: 18
    },
    {
      title : 'Monday',
      icon: weatherIconList[1].icon,
      degre: 20
    },
    {
      title : 'Friday',
      icon: weatherIconList[2].icon,
      degre: 17
    },
    {
      title : 'Suturday',
      icon: weatherIconList[3].icon,
      degre: 15
    },
    {
      title : 'Sanday',
      icon: weatherIconList[0].icon,
      degre: 13
    },
  ]

  return (
    <section className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.wtWrapper}>
          {
            mock.map((i, index)=>(
            <div key={index} className={classes.wtItem}>
              <p className={classes.title}>{i.title}</p>
              <p className={classes.icon}>{i.icon}</p>
              {/* <p className={classes.text}></p> */}
              <p className={classes.degre}>{i.degre}&deg;C</p>
            </div>
            ))
          }
          
        </div>
      </div>  
    </section>
  )
}
