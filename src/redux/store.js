import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import { mainApi } from "./api/mainApi";
import sampleSliceReducer from "./features/sampleSlice/sampleSlice";
import anotherSliceReducer from "./features/AnotherSlice/AnotherSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["sample"],
};

const rootReducer = combineReducers({
  sample: sampleSliceReducer,
  anotherSample: anotherSliceReducer,

  [mainApi.reducerPath]: mainApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(mainApi.middleware),
});

export const persistor = persistStore(store);
