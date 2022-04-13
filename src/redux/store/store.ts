import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';

export const store = configureStore({
  reducer: {
    authentication: authReducer,
  },
});

// Infer the RootState and AppDispatch types from store itself
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
