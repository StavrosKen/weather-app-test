import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas'
import { logger } from '../middleware';
import rootReducer, { RootState } from '../redux';

export function configureStore(initialState?: RootState) {
  let sagaMiddleware = createSagaMiddleware();
  let middleware = applyMiddleware(logger, sagaMiddleware);

  if (process.env.NODE_ENV === 'development') {
    middleware = composeWithDevTools(middleware);
  }

  const store = createStore(rootReducer, initialState, middleware) as Store<RootState>;

  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    module.hot.accept('../redux', () => {
      const nextReducer = require('../redux');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
