export const getGeolocation = () => {
  const pos = {
    lat: 0,
    lon: 0,
  }
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      pos.lat = position.coords.latitude
      pos.lon = position.coords.longitude
    })
    return pos
  } else {
    return "Geolocation is not supported by this browser."
  }
}

export const getFromLocalStorage = (key: string) => {
  if (!window || !window.localStorage) {
    return null
  }
  try {
    const data = window.localStorage.getItem(key)
    if (data) {
      return JSON.parse(data)
    }
  } catch (e) {
    console.error(e)
    return null
  }
}
export const setToLocalStorage = (key: string, value: any) => {
  if (!window || !window.localStorage) {
    return
  }
  window.localStorage.setItem(key, JSON.stringify(value))
}

// export const AddtoCacheCitiesName = (list: any, payload: any) => {
//   return list.length > 0
//     ? [...list.slice().map((i: any) => i.name)]
//     : [payload.name]
// }

export const AddToCacheData = async (
  cacheName: string,
  name: string,
  dataName: string,
) => {
  try {
    const data = new Response(JSON.stringify(dataName))

    if ("caches" in window) {
      const cache = await caches.open(cacheName)
      cache.put(name, data)
      //  cache.add(dataName)
    }
  } catch (error) {
    throw error
  }
}
export const CleanCache = (cacheName: string) =>{
  try {
    if('caches' in window){
      caches.open(cacheName).then(res=> res.delete('cities'))
      caches.open(cacheName).then(res => console.log(res.keys()))
    }
  } catch (error) {
    throw error;
  }
}
export const getCitiesWeatherFromCache = async () => {
// get data from cache
  try {
    const cache = await caches.open('CitiesWeather')
    const data = await cache.match('cities')
    const res = data && await data?.json() 
    return res ? res.split(", "): []
    
  } catch (error) {
    throw error
  } 
}

