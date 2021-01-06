import { UPDATE_TODO } from '../actions/types';

export const reducer = (state={}, action) => {
    switch (action.type){
        case UPDATE_TODO:
            return{
                ...state,
                update_data: action.payload
            }
        default:
            return state;
    }
}