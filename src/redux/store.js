// Configuration store

import { createStore } from 'redux';
import { Reducer, initialState } from './reducer';


export const StoreConfig = () => {
    // Creating a reduce store
    const store = createStore(Reducer, initialState);
    return store;
}