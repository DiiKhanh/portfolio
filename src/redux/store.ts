import { configureStore } from '@reduxjs/toolkit';
import activeSectionReducer from './features/activeSectionSlice';

export const store = configureStore({
  reducer: {
    activeSectionReducer
  },
  devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = (typeof store.dispatch);