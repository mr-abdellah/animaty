import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import animeReducer from './cards';

const store = configureStore({
  reducer: {
    animes: animeReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
