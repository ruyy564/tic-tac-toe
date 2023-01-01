import { configureStore, combineReducers } from '@reduxjs/toolkit';
import gameReducer from './slices/gameSlice';

const rootReducer = combineReducers({ game: gameReducer });

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
  });
