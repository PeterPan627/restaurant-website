// Configuration stores
import { createStore, combineReducers } from 'redux';

// The reducer is splited into 4 parts
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders  } from './leaders';


export const StoreConfig = () => {
    // Creating a reduce store
    const store = createStore(
        //Combine reducers
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        })
    );
    return store;
}