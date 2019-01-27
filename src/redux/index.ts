import { combineReducers } from 'redux';
import forecasts from './Forecasts';

export interface RootState {
  forecasts: ForecastStoreState,
}

export default combineReducers<RootState>({
  forecasts,
});
