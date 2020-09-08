import { createStore } from 'redux';

const INITIAL_STATE = {}

function userData(state = INITIAL_STATE, action: any) {
    switch (action.type) {
        case 'STORE_COUNTRY':
            return { ...state, country: action}
        default:
            return state;
    }
}

const store = createStore(userData);

export default store;