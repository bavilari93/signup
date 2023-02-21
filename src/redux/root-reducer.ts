import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import commonReducer from './slices/common';

 
const rootPersistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["settings"],
};



const commonPersistConfig = {
  key: "commonReducer",
  storage: storage,
  keyPrefix: "redux-",
  whitelist: ["displayModal"],
};

 
const rootReducer = combineReducers({
  common: persistReducer(commonPersistConfig, commonReducer),
});

export { rootPersistConfig, rootReducer };
