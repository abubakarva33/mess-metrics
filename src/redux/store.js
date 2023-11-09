import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import { mainApi } from "./api/mainApi";
import basicReducer from "./features/basic/basicSlice";
import userSliceReducer from "./features/UserSlice/UserSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["basic","user"],
};

const rootReducer = combineReducers({
  basic: basicReducer,
  user: userSliceReducer,

  [mainApi.reducerPath]: mainApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(mainApi.middleware),
});

export const persistor = persistStore(store);
