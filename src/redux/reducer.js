// Reducer functions

import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';

// Initial configuration for the state(s)
export const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
};

// ES6 way of defining default value for a parameter: state = initialStte
// When the reducers is first called default value of state will be initialState, not undefined
// Pure function, is not changing the state in any way
export const Reducer = (state = initialState, action) => { // current state and action
    return state;
} 