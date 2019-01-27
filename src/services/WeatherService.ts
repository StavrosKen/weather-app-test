class WeatherService {

  getWeatherForCity = city => {
    const baseUrl = 'http://api.openweathermap.org/data/2.5/forecast';
    const appId = 'appid=5b73117334cc06960ef275569f2caacb';

    const fullUrl = `${baseUrl}?${appId}&q=${city}`;

    return fetch(fullUrl)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      });
  }
}

export default new WeatherService;
