import axios from 'axios';
import { TODO } from './types';
import { GET_ERRORS } from './types';

import History from '../history';

const ROOT_URL = 'http://127.0.0.1:5000'

export const send_todo = ({title, todoDescription, status}) => {
    return(dispatch) =>{
        axios.post(`${ROOT_URL}/maketodo`, {title, todoDescription, status})
        .then(response => {
            dispatch(createTodo(response))
            History.push('/')
        }).catch((error)=>{
            dispatch(todoError(error))
        })
    }
}

export const createTodo = (data) => {
    return {
        type: TODO,
        payload: data
    }
}

export const todoError = (error) =>{
    return {
        type: GET_ERRORS,
        payload: error
    }
}