import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage';

export const INITIAL_STATE = {
    data: {
        country: {
            name: '',
            altSpellings: []
        }
    }
}

function userData(state = INITIAL_STATE, action: any) {
    switch (action.type) {
        case 'STORE_COUNTRY':
            return { ...state, data: action}
        default:
            return state;
    }
}

const persistConfig = {
    key: 'theWorld',
    storage,
    whitelist: ['data'],
}

const persistedReducer = persistReducer(persistConfig, userData);

const store = createStore(persistedReducer);
const persistor = persistStore(store)

export { store, persistor};