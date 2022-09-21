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
  pressure?:  number,
  humidity?:  number,
  sea_level?:  number,
  grnd_level?:  number,
}
type Wind = {
  speed: number,
  deg: number,
  gust: number
}
interface Cord{
  lon: number,
  lat: number
}
export interface Weather {
  dt: number;
  main:MainOptions;
  wind: Wind;
  rain: any;
  dt_txt: Date;
  clouds: {
    all: number
  };
  pop: number;
  visibility: number;
  weather:Array<IWeather>;  
  indexCount: number;  
  sys?: {
    type: number,
    id: number,
    country: string,
    sunrise: number,
    sunset: number
  };
}
export interface IWeatherData extends Weather{
  coord: Cord;
  base: string;
  
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

interface ICity{
  id: number;
  name: string;
  coord: Cord;
  country:string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

export interface IForecastList {
  city: ICity;
  cod: string;
  message: number;
  cnt: number;
  list: Weather[];
}

export type ForecastData ={
  [k: string]: Weather[];
}
