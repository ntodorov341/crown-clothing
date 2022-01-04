import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

// local storage
import storage from 'redux-persist/lib/storage';

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'], // contains the names of all the reducers that we want to persist
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
});

// exports the persisted version of the root reducer with the config applied
export default persistReducer(persistConfig, rootReducer);