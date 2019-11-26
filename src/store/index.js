import { createStore, compose, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import reducer from "./reducer";
import thunk from "redux-thunk";
const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ['user', 'global'] //navigation会存入缓存，其他不会存，适用于大多数数据并不会实时从后台拿数据
};
const persistReducers = persistReducer(persistConfig, reducer);  // 包装rootReducer
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;
const store = createStore(persistReducers, composeEnhancers(applyMiddleware(thunk)));

export const persistor = persistStore(store)
export default store;
