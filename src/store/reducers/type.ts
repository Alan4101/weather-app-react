export interface IWeather{
  id: number;
  main: string;
  description: string;
  icon?: string
}
type MainOptions = {
  temp: number,
  feels_like: number,
  temp_min:  number,
  temp_max:  number,
  pressure:  number,
  humidity:  number,
  sea_level:  number,
  grnd_level:  number,
}
type Wind = {
  speed: number,
  deg: number,
  gust: number
}
export interface IWeatherData{
  coord: {
    lon: number,
    lat: number
  };
  weather:Array<IWeather>;  
  base: string;
  main: MainOptions;
  visibility: number;
  wind: Wind;
  rain: any;
  clouds: {
    all: number
  };
  dt: number
  sys: {
    type: number,
    id: number,
    country: string,
    sunrise: number,
    sunset: number
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}