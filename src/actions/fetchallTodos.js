import axios from 'axios';
import { ALLTODOS } from './types';

const ROOT_URL = 'http://127.0.0.1:5000'

export const fetch_todos = () => {
    return(dispatch) =>{
        axios.get(`${ROOT_URL}/todos`)
        .then(response => {
            dispatch(createTodo(response.data))
            
        }).catch((error)=>{
            console.log(error)
        })
    }
}

export const createTodo = (data) => {
    return {
        type: ALLTODOS,
        payload: data
    }
}