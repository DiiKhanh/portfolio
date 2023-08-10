import { configureStore } from '@reduxjs/toolkit';
import activeSectionReducer from './features/activeSectionSlice';
import themeReducer from './features/themeSlice';

export const store = configureStore({
  reducer: {
    activeSectionReducer,
    themeReducer
  },
  devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = (typeof store.dispatch);