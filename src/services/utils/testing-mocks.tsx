export const forecastMockData = {
  sunday: [
    {
      dt: 1512,
      main: {
        temp: 12,
        feels_like: 11,
        temp_min: 10,
        temp_max: 12,
      },
      wind: {
        speed: 25,
      },
      rain: "",
      dt_txt: "12545878",
      clouds: {
        all: 12,
      },
      pop: 12,
      visibility: 100,
      weather: [{ id: 12, main: "rain", description: "rain" }],
      indexCount: 1,
    },
  ],
}
export const weatherMockData = {
  clouds: { all: 98 },
  dt: 1664150400,
  dt_txt: "2022-09-26 00:00:00",
  main: {
    temp: 10.66,
    feels_like: 9.95,
    temp_min: 10.66,
    temp_max: 10.66,
    pressure: 1015,
  },
  pop: 0,
  visibility: 10000,
  weather: [{ id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04n' }],
  wind: { speed: 2.76, deg: 191, gust: 5.41 },
  rain: undefined,
  indexCount: 0,
}