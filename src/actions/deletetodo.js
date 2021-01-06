import axios from 'axios';
import { DELETE_TODO } from './types';

import History from '../history';

const ROOT_URL = 'http://127.0.0.1:5000'

export const delete_todo = (id) => {
    return(dispatch) =>{
        axios.delete(`${ROOT_URL}/todos/${id}`)
        .then(response => {
            dispatch(deleteTodo(response))
            History.push('/')
        }).catch((error)=>{
            console.log(error)
        })
    }
}

export const deleteTodo = (data) => {
    return {
        type: DELETE_TODO,
        payload: data
    }
}

