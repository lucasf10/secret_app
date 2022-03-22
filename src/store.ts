import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import reducers from './reducers';
import rootSaga from './sagas';

import { Action, State } from './types/common';

const persistConfig = {
  key: '@Secret',
  whitelist: ['user'],
  storage: AsyncStorage,
};

const sagaMiddleware = createSagaMiddleware();

const rootReducer = (state: State | undefined, action: Action) =>
  reducers(state, action);

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  compose(applyMiddleware(sagaMiddleware)),
);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
