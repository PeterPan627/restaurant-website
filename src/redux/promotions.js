import * as ActionTypes from './ActionTypes';


export const Promotions = (state = {
        isLoading: true,
        error: null,
        promotions: []
    }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_PROMOS:
            return {...state, isLoading: false, error: null, promotions: action.payload}
    
        case ActionTypes.PROMOS_LOADING:
            // take the state and create a new object, than modify the copied one
            return {...state, isLoading: true, error: null, promos: []}

        case ActionTypes.PROMOS_FAILED:
            return {...state, isLoading: false, error: action.payload, promotions: []}

        default:
            return state;
    }
}