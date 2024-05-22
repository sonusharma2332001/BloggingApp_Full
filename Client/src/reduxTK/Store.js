import { configureStore, combineReducers } from '@reduxjs/toolkit';
import UserReducer from "./AuthSlice.js";
import { persistReducer, persistStore } from 'redux-persist';
import  storage from 'redux-persist/lib/storage';
import ThemeReducer from './ThemeSlice.js';

const rootReducer = combineReducers({
  User: UserReducer,
  theme:ThemeReducer
});

const persistConfig = {
  key: 'root',
  storage,
  version: 1
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false })
});

export const persistor = persistStore(store);