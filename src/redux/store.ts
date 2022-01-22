
import {createStore, applyMiddleware, combineReducers} from 'redux';

import { composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist'
import authReducer from './reducers/authReducer';

const initialState = {}

const persistConfig = {
    key: 'root',
    storage: storage,
    blacklist: ['auth']
 };

 const authPersistConfig = {
    key: 'auth',
    storage: storage,
 }

 const rootReducer = combineReducers({
    auth: persistReducer(authPersistConfig, authReducer),
   
 })
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk)),
)

export const persistor = persistStore(store)

export default store