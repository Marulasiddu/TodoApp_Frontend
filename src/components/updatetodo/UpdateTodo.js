import React, { Component } from 'react';
import {send_todo} from '../../actions/createtodos';
import {update_todo} from '../../actions/updatetodo';
import { connect } from 'react-redux';
import './UpdateTodo.css';

const Actions = { send_todo, update_todo }

class UpdateTodo extends Component {
    constructor(){
        super()
        this.state = {
            title: '',
            todoDescription: '',
            status: ''
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.submitMessage = this.submitMessage.bind(this)
    }

    onChangeHandler(event){
        this.setState({[event.target.name]: event.target.value});
    }

    submitMessage = () => {
        const {id, title, todoDescription, status} = this.state
        this.props.update_todo({id, title, todoDescription, status});
        this.setState({
            title: '',
            todoDescription: '',
            status:''
        })
        this.props.history.push('/');
        
    }

    

    componentDidMount(){
        this.setState({id:this.props.updateData.update_data.id,
                       title:this.props.updateData.update_data.title, 
                       todoDescription: this.props.updateData.update_data.todoDescription,
                       status: this.props.updateData.update_data.status })
    }


    render() {
        // const {id, title, todoDescription, status} = this.state;
        // const { updateData } = this.props;
        return (
            <div className="home">
            <div className="creat-todo-cont">
                <h2 >Update Todo</h2>
                <input type="text" value={this.state.title} name="title" className="form-control form-control-lg" placeholder="title" onChange={this.onChangeHandler} />
                <input type="text" value={this.state.todoDescription} name="todoDescription" className="form-control form-control-lg" placeholder="description" onChange={this.onChangeHandler} />
                <div className="form-group">
                    <select className="form-control form-control-lg" name="status" value={this.state.status} onChange={this.onChangeHandler}>
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


const mapStateToProps = (state) => {
    return{
        updateData: state.updatetodo,
    }
}

export default connect(mapStateToProps, Actions)(UpdateTodo);