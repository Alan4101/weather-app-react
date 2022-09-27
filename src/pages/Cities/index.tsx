import { FC, useCallback, useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "./../../services/hooks/hooksStore"

import { cleanList, getWeatherForOneCity } from "./../../store/reducers/weatherCities"
import { CleanCache, getCitiesWeatherFromCache } from "../../services/utils/utils"

import { CityCard } from "../../components/CityCard"
import { Loader } from "../../components"

import classes from "./index.module.scss"

export const Cities: FC = () => {
  const { list, loading } = useAppSelector(state => state.citiesWeather)
  const dispatch = useAppDispatch()
  const [city, setCity] = useState<string>("")
  const [cities, setCities] = useState([])
  const [isMounted, setIsMounted] = useState(false)
  const [message, setMessage] = useState('')
  
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
        ).then(() =>{
          setCity("")
          setMessage("")
        } )
      }else{
        setMessage('Please enter city')
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
        {message && <p>{message}</p>}
        <form className={classes.formContainer}>
          <input
            className={classes.inputText}
            type="text"
            value={city}
            onChange={e => handleDispatchCity(e)}
            placeholder="Plase enter the city"
          />
          <div className={classes.btnContainer}>
            <button className={classes.btn} onClick={handlerAddCity}>
              <span className={classes.title}>Add city</span>
            </button>
            <button className={classes.btn} onClick={handleCleanAllList}>
              <span className={classes.title}>Clean list</span>
            </button>
          </div>
        </form>
        {loading ? (
          <Loader />
        ) : (
          <div>{list?.length && list.map((i, index) => <CityCard key={index} {...i} />)}</div>
        )}
      </div>
    </div>
  )
}
