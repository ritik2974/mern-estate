import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice'
export const store = configureStore({
  reducer: {user:userReducer}, 
  middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware({
        serializableCheck:false,
    }),
    // middleware is just used here to remove errors in the browser//
 
}) 