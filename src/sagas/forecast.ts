import { put, takeEvery, all, call } from 'redux-saga/effects'
import { actions as ForecastActions } from '../redux/Forecasts';
import WeatherService from '../services/WeatherService';

// datepart: 'y', 'm', 'w', 'd', 'h', 'n', 's'
const dateDiff = (datepart, fromdate, todate) => {
    datepart = datepart.toLowerCase();
    var diff = todate - fromdate;
    var divideBy = {
        w: 604800000,
        d: 86400000,
        h: 3600000,
        n: 60000,
        s: 1000
    };

    return Math.floor(diff / divideBy[datepart]);
}

const getTemperatureFromList = list => {
    const KELVIN_TO_CELSIUS_DIFF = 273.15;
    const dateTimeNow = new Date();
    const interestedInHours = [0, 6, 12, 18];

    return list
        .filter(forecast => {
            const forecastDateTime = new Date(forecast.dt_txt);
            const hours = forecastDateTime.getHours();
            const daysDifferenceFromToday = dateDiff('d', dateTimeNow, forecastDateTime);

            return daysDifferenceFromToday === 0 && interestedInHours.includes(hours);
        })
        .sort((a, b) => new Date(a.dt_txt).getHours() - new Date(b.dt_txt).getHours())
        .map(forecast => (forecast.main.temp - KELVIN_TO_CELSIUS_DIFF).toFixed(0).toString());
};

export function* getForecastForCity(action) {
    const city = action.payload;

    try {
        const response = yield call(WeatherService.getWeatherForCity, city);
        const forecast = {
            cityName: `${response.city.name}, ${response.city.country}`,
            temperature: getTemperatureFromList(response.list),
        };
        yield put(ForecastActions.getForecastForCitySuccess(forecast));
    } catch (error) {
        alert(`${error}. Please try again.`);
    }
}

export const forecast = [
    takeEvery("GET_FORECAST_FOR_CITY", getForecastForCity),
]