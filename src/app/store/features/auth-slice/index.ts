import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "@app/store";
import {AuthStateType, AuthDataType} from "@service/types/auth-slice.type";

const initialState: AuthStateType = {
 data: {
   accessToken: null,
   tokenType: null,
   user: null,
 },
 hasToken: false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loadAuth: (state, action: PayloadAction<AuthDataType>) => {
      state.data = action.payload;
      state.hasToken = true;
    },
    clearAuth: (state) => {
      state.data = initialState.data;
      state.hasToken = initialState.hasToken;
    }
  }
})

export const selectAuth = (state: RootState) => state.entities.auth
export const { loadAuth, clearAuth } = authSlice.actions