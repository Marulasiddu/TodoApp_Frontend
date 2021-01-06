import { GET_ERRORS } from '../actions/types';

export const reducer = (state={}, action) => {
    switch (action.type){
        case GET_ERRORS:
            return{
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}