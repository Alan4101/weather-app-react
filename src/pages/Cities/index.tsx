import { FC, useCallback, useEffect, useState } from "react"
import classes from "./index.module.scss"
import {
  useAppDispatch,
  useAppSelector,
} from "./../../services/hooks/hooksStore"
import {
  cleanList,
  getWeatherForOneCity,
} from "./../../store/reducers/weatherCities"
import { CityCard } from "../../components/CityCard"
import {
  CleanCache,
  getCitiesWeatherFromCache,
} from "../../services/utils/utils"

export const Cities: FC = () => {
  const { list, loading, error } = useAppSelector(state => state.citiesWeather)
  const dispatch = useAppDispatch()
  const [city, setCity] = useState<string>("")
  const [cities, setCities] = useState([])

  useEffect(() => {
    getCitiesWeatherFromCache().then(res => {
      setCities(res)
      // res.forEach((i:string) => {
      //   dispatch(getWeatherForOneCity({ q: i }))
      // })
      console.log(res)
    })
  }, [])

  // useEffect(() => {
  //   if ( cities) {
  //     cities.forEach(i => {
  //       dispatch(getWeatherForOneCity({ q: i }))
  //     })
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  const addCity = useCallback(
    (cityName: string) => {
      if (cityName) {
        console.log(cityName)
        dispatch(
          getWeatherForOneCity({
            q: cityName,
          }),
        )
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [city],
  )

  const handlerAddCity = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (list?.length) {
      const isExist = list.some(
        ({ name }) => name.toLowerCase() !== city.toLowerCase(),
      )
      isExist ? addCity(city) : console.log("City is exist in your list!")
    } else {
      addCity(city)
    }
  }

  const handleCleanAllList = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    dispatch(cleanList())
    CleanCache("CitiesWeather")
  }

  const handleDispatchCity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value)
  }

  return (
    <div className={classes.citiesWrapper}>
      <div>
        <form>
          <input
            type="text"
            value={city}
            onChange={e => handleDispatchCity(e)}
          />
          <button onClick={handlerAddCity}>Add city</button>
          <button onClick={handleCleanAllList}>Clean list</button>
        </form>
        <div>
          {list?.length && list.map((i, index )=> <CityCard key={index} {...i} />)}
        </div>
      </div>
    </div>
  )
}
