import axios from 'axios';
import { UPDATE_TODO } from './types';
import { GET_ERRORS } from './types';

import History from '../history';

const ROOT_URL = 'http://127.0.0.1:5000'

export const update_todo = (data) => {
    return(dispatch) =>{
        dispatch(updateTodo(data))
        History.push('/')
        axios.put(`${ROOT_URL}/todos/${data.id}`, data)
        .then(response => {
            dispatch(updateTodo(response.data))
            History.push('/')
        }).catch((error)=>{
            console.log(error)
        })

    }
}

export const updateTodo = (data) => {
    return {
        type: UPDATE_TODO,
        payload: data
    }
}

export const todoError = (error) =>{
    return {
        type: GET_ERRORS,
        payload: error
    }
}