import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import common from './Common';
import resource from './Resource';

const reducers = combineReducers({
  common,
  resource,
});

const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };
