import { createAction, handleActions } from 'redux-actions';

export const GET_FORECAST_FOR_CITY = 'GET_FORECAST_FOR_CITY';
export const GET_FORECAST_FOR_CITY_SUCCESS = 'GET_FORECAST_FOR_CITY_SUCCESS ';

export const actions = {
  getForecastForCity: createAction<string>(GET_FORECAST_FOR_CITY),
  getForecastForCitySuccess: createAction<ForecastData>(GET_FORECAST_FOR_CITY_SUCCESS),
};

const initialState: ForecastStoreState = [];

export default handleActions<ForecastStoreState, ForecastData>({
  [GET_FORECAST_FOR_CITY_SUCCESS]: (state, action) => {
    return [
      { ...action.payload },
      ...state
    ];
  },
}, initialState);
