export const getGeolocation = () => {
    const pos = {
        lat: 0,
        lon: 0
    }
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => { 
            pos.lat = position.coords.latitude;
            pos.lon = position.coords.longitude;
        });
        return pos;
    }else {
        return 'Geolocation is not supported by this browser.'
    }
}

export const getFromLocalStorage = (key: string) => {
    if (!window || !window.localStorage) {
        return null;
      }
      try {
        const data = window.localStorage.getItem(key);
        if (data) {
          return JSON.parse(data);
        }
      } catch (e) {
        console.error(e);
        return null;
      }
}
export const setToLocalStorage = (key: string, value: any) => {
    if (!window || !window.localStorage) {
        return;
      }
      window.localStorage.setItem(key, JSON.stringify(value));
}

  
