import {combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice'
import {persistReducer,persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


// here persistReducer and storage and root reducer are 
// used to store current user in browser storage as after
//  refreshing the page we loose our current user as it 
//  get sets to null

const rootReducer=combineReducers({user:userReducer})

const persistConfig={
    key:'root',
    storage,
    version:1,
}


const persistedReducer=persistReducer(persistConfig,rootReducer)



export const store = configureStore({
  reducer: persistedReducer, 
  middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware({
        serializableCheck:false,
    }),
    // middleware is just used here to remove errors in the browser//
 
}) 

export const persistor=persistStore(store);