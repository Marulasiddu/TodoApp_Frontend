import React, { Component } from 'react';
import {send_todo} from '../../actions/createtodos';
import {fetch_todos} from '../../actions/fetchallTodos';
import { connect } from 'react-redux';
import './CreateTodo.css';

const Actions = { send_todo, fetch_todos }


class CreateTodo extends Component {
    constructor(){
        super()
        this.state = {
            title: '',
            todoDescription: '',
            status: '',
            
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.submitMessage = this.submitMessage.bind(this)
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.errors){
            this.setState({errors: nextProps.errors})
        }
    }

    onChangeHandler(event){
        this.setState({[event.target.name]: event.target.value});
    }
    

    submitMessage = (event) => {
        event.preventDefault();
        const {title, todoDescription, status} = this.state
        this.props.send_todo({title, todoDescription, status});
        this.setState({
            title: '',
            todoDescription: '',
            status:''
        })
        this.props.fetch_todos();
        this.props.history.push('/')
        
    }


    render() {
        const {errors} = this.state;
        const {title, todoDescription, status} = this.state;
        return (
            <div className="home">
            <div className="creat-todo-cont">
                <h2 >Create Todo</h2>
                <input type="text" value={title} name="title" className="form-control form-control-lg" placeholder="title" onChange={this.onChangeHandler} />
                
                <input type="text" value={todoDescription} name="todoDescription" className="form-control form-control-lg" placeholder="description" onChange={this.onChangeHandler} />
                <div className="form-group">
                    <select className="form-control form-control-lg" name="status" value={status} onChange={this.onChangeHandler}>
                        <option value="">Select Status</option>
                        <option value="TO_DO">TO DO</option>
                        <option value="IN_PROGRESS">IN PROGRESS</option>
                        <option value="DONE">DONE</option>
                    </select>
                </div>
                <input type="submit" onClick={this.submitMessage} className="btn btn-primary btn-block mt-4" />
                
            </div>
            </div>
        );
    }
}

export default connect(null, Actions)(CreateTodo);