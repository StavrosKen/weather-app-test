import * as _expect from 'expect';
import reducer, { actions } from '../index';

const expect = _expect as any as typeof _expect.default;

describe('Forecasts reducer', () => {

  it('should return the initial state', () => {
    const actualState = reducer([], { type: '' });
    const expectedState = [];

    expect(actualState).toEqual(expectedState);
  });

  it('should handle GET_FORECAST_FOR_CITY_SUCCESS', () => {
    const forecast = { cityName: 'London, GB', forecast: [1, 2, 3, 4] };
    const expected = [forecast];
    const actual = reducer([], actions.getForecastForCitySuccess(forecast));

    expect(actual).toEqual(expected);
  });
});
