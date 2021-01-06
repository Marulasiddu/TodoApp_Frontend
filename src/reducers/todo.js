import { TODO } from '../actions/types';

export const reducer = (state={}, action) => {
    switch (action.type){
        case TODO:
            return{
                ...state,
                todo_data: action.payload
            }
        default:
            return state;
    }
}