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