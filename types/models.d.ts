declare interface ForecastData {
  cityName: string;
  temperature?: Array<any>;
}

declare type ForecastStoreState = ForecastData[];
