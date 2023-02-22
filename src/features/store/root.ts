import { configureStore } from '@reduxjs/toolkit';
import { appReducer } from 'features/auth-provider/model';
import { authReducer } from 'features/auth/model';
import { profileReducer } from 'shared/api/model/profile';

export const store = configureStore({
  reducer: {
    app: appReducer,
    auth: authReducer,
    profile: profileReducer
  },
});