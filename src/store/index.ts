import { configureStore } from '@reduxjs/toolkit';
import { deptApi } from './dept/dept.api';
import { deptReducer } from './dept/dept.slice';

export const store = configureStore({
  reducer: {
    [deptApi.reducerPath]: deptApi.reducer,
    dept: deptReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(deptApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
