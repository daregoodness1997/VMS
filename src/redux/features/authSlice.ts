import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  email: string;
  password: string;
}

export interface AuthState {
  loggedIn: boolean;
  user?: User;
}

const initialState: AuthState = {
  loggedIn: false,
  user: { email: '', password: '' },
};

export const authSlice = createSlice({
  name: 'authentication',
  initialState: initialState,
  reducers: {
    success: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        loggedIn: true,
        user: {
          email: action.payload.email,
          password: action.payload.password,
        },
      };
    },
  },
});

export const { success } = authSlice.actions;

export default authSlice.reducer;

// https://j-krrishchandran.medium.com/react-app-with-authentication-and-basic-listing-using-typescript-hooks-and-redux-toolkit-307314d2733d
