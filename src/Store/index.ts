import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import Common from './Common';

const reducers = combineReducers({
  Common,
});

const store = configureStore({
  reducer: reducers,
});

export { store };
