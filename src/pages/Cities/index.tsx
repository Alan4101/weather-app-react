import { FC, useCallback, useEffect, useState } from "react"
import classes from "./index.module.scss"
import { useAppDispatch, useAppSelector } from "./../../services/hooks/hooksStore"
import { cleanList, getWeatherForOneCity } from "./../../store/reducers/weatherCities"
import { CityCard } from "../../components/CityCard"
import { CleanCache, getCitiesWeatherFromCache } from "../../services/utils/utils"

export const Cities: FC = () => {
  const { list } = useAppSelector(state => state.citiesWeather)
  const dispatch = useAppDispatch()
  const [city, setCity] = useState<string>("")
  const [cities, setCities] = useState([])
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    getCitiesWeatherFromCache('cities-name', 'cities').then(res => {
      setCities(res)
    })
  }, [])

  useEffect(() => {
    const getAllWeather = () => {
      cities.forEach(async i => {
        await dispatch(getWeatherForOneCity({ q: i }))
      })
    }
    if (!isMounted) {
      if (cities.length > 0) {
        getAllWeather()
        setIsMounted(true)
      }
    }
    return () => {
      dispatch(cleanList())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cities, isMounted])

  const addCity = useCallback(
    (cityName: string) => {
      if (cityName) {
        dispatch(
          getWeatherForOneCity({
            q: cityName,
          }),
        ).then(()=> setCity(''))
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [city],
  )

  const handlerAddCity = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (list?.length) {
      const isExist = list.some(({ name }) => name.toLowerCase() !== city.toLowerCase())
      isExist ? addCity(city) : console.log("City is exist in your list!")
    } else {
      addCity(city)
    }
  }

  const handleCleanAllList = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    dispatch(cleanList())
    CleanCache("cities-name")
  }

  const handleDispatchCity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value)
  }

  return (
    <div className={classes.citiesWrapper}>
      <div>
        <form>
          <input type="text" value={city} onChange={e => handleDispatchCity(e)} />
          <button onClick={handlerAddCity}>Add city</button>
          <button onClick={handleCleanAllList}>Clean list</button>
        </form>
        <div>{list?.length && list.map((i, index) => <CityCard key={index} {...i} />)}</div>
      </div>
    </div>
  )
}
