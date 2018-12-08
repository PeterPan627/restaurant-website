import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';
import { baseURL } from '../shared/baseURL';

// addComment Action Creator
export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});

// Thunk
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));
    // communicating the server
    return fetch(baseURL + 'dishes')
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)));
}

export const fetchComments = () => (dispatch) => {
    // communicating the server
    return fetch(baseURL + 'comments')
        .then(response => response.json())
        .then(comments => dispatch(addCommnets(comments)));
}

// return action object
export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (error) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: error

});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});

export const commentsFailed = (error) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: error

});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading(true))
    // communicating the server
    return fetch(baseURL + 'promotions')
        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)));
}

// return action object
export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (error) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: error

});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: dishes
});