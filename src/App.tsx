import { FC, useEffect, useState } from "react"
import "./App.scss"
import { Layout } from "./components"
import { useAppDispatch, useAppSelector } from "./services/hooks"
import { getCurrentWeather } from "./store/reducers/weatherReducer"

export const App: FC = () => {
  const dispatch = useAppDispatch()
  const [kindWeather, setKindWeeather] = useState('')
  const data = useAppSelector(
    state => state.weathers.weatherData.data,
  )
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        dispatch(
          getCurrentWeather({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          }),
        )
      })
    }
    // eslint-disable-next-line
  }, [])
useEffect(()=>{
  if(data){
    const kind = data.weather[0].main.toLowerCase();

    setKindWeeather(kind)
  }
},[data])
  console.log(kindWeather)
  return (
    <div className="App">
      <video className="video-bg" autoPlay muted loop>
        {/* <source type="video/mp4" src="/cloudy.mp4" /> */}
        <source type="video/mp4" src={`/${kindWeather}.mp4`} />
      </video>
      <div className="mainWrapper">
        <Layout/>
      </div>
    </div>
  )
}
