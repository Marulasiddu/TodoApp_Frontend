import { ALLTODOS } from '../actions/types';

export const reducer = (state={}, action) => {
    switch (action.type){
        case ALLTODOS:
            return{
                ...state,
                alldata: action.payload
            }
        default:
            return state;
    }
}