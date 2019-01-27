import * as _expect from 'expect';
import { takeEvery, delay } from 'redux-saga';
import { call, put, take } from 'redux-saga/effects';
import { actions } from '../../redux/Forecasts';

import WeatherService from '../../services/WeatherService';
import * as forecastSaga from '../forecast';


const expect = _expect as any as typeof _expect.default;

const getDateFor = (hours, minutes, days = null) => {
    let date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes);
    if (days) {
        date.setDate(date.getDate() + days)
    }
    return date;
}

describe('getForecastForCity', () => {
    let generator = null;

    const sampleData = {
        city: {
            name: 'London',
            country: 'GB',
        },
        list: [
            { dt_txt: getDateFor(0, 0), main: { temp: 279.25 } },
            { dt_txt: getDateFor(6, 0), main: { temp: 279.25 } },
            { dt_txt: getDateFor(12, 0), main: { temp: 279.25 } },
            { dt_txt: getDateFor(18, 0), main: { temp: 279.25 } },
            { dt_txt: getDateFor(0, 0, 1), main: { temp: 279.25 } },
            { dt_txt: getDateFor(6, 0, 1), main: { temp: 279.25 } },
            { dt_txt: getDateFor(12, 0, 1), main: { temp: 279.25 } },
            { dt_txt: getDateFor(18, 0, 1), main: { temp: 279.25 } },
        ],
    };

    const spy = jest.spyOn(WeatherService, 'getWeatherForCity').mockImplementation(() => Promise.resolve(sampleData));

    beforeEach(() => {
        generator = forecastSaga.getForecastForCity(actions.getForecastForCity('London, GB'));
    });

    it('must call WeatherService', () => {
        const testValue = generator.next().value
        expect(testValue).toEqual(call(spy, 'London, GB'))
    });

    it('must call getForecastForCitySuccess', done => {
        let testValue = generator.next().value;
        testValue = generator.next(sampleData).value;
        const action = actions.getForecastForCitySuccess({ cityName: 'London, GB', temperature: ['6', '6', '6', '6'] });
        expect(testValue).toEqual(put(action));
        done();
    });
});
