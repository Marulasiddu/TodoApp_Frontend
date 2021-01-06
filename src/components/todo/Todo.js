import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetch_todos } from '../../actions/fetchallTodos';
import { delete_todo } from '../../actions/deletetodo';
import { update_todo } from '../../actions/updatetodo';
import './Todo.css'
const Actions = {fetch_todos , delete_todo, update_todo }


class Todo extends Component {
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(data){
        console.log(data.id)
        this.props.delete_todo(data.id)
        
    }

    handleEdit(data){
        this.props.update_todo(data)
        // this.props.history.push('/')
    }

    componentDidMount(){
        this.props.fetch_todos()
    }

    // componentWillReceiveProps(props){
    //     this.props.fetch_todos()
    // }

    render() {
        const {allData} = this.props;
        const filteredData = allData.alldata && allData.alldata.filter((item)=>{
                if(item.status === 'DONE'){
                    return item
                }
        })
      

        return (
            <React.Fragment>
            <div className="table1">
                <div className="title"><span style={{color:"black", fontSize:"900"}} >{`Todos`}</span></div>
                <table className="blueTable">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Status</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allData.alldata && allData.alldata.filter((item) => {if(item.status !== 'DONE') return item}).map((data, index) =>{
                            return (
                                <tr key={index}>
                                    <td>{data.id}</td>
                                    <td>{data.title}</td>
                                    <td>{data.todoDescription}</td>
                                    <td>{data.status}</td>
                                    <td><button className="edit_button" onClick={() => this.handleEdit(data)}>
                                    <Link to='/update-Todo' >Edit</Link>
                                    </button></td>
                                    <td><button className="delete_button" onClick={() => this.handleDelete(data)}>Delete</button></td>
                                </tr>
                            )
                        })} 
                    </tbody>
                </table>
            </div>

            <div className="table2">
            <div className="title"><span style={{color:"white"}}>{`Done`}</span></div>
            <table className="blueTable">
                <thead>
                    <tr>
                        <td>Id</td>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                {filteredData && filteredData.map((data, index) =>{
                    return (
                        <tr key={index}>
                            <td>{data.id}</td>
                            <td>{data.title}</td>
                            <td>{data.todoDescription}</td>
                            <td>{data.status}</td>
                            <td><button className="edit_button" onClick={() => this.handleEdit(data)}>
                            <Link to='/update-Todo' >Edit</Link>
                            </button></td>
                            <td><button className="delete_button" onClick={() => this.handleDelete(data)}>Delete</button></td>
                        </tr>
                    )
                })} 
                </tbody>
            </table>

            </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        todoData: state.todo,
        errors: state.errors,
        allData: state.alltodo
    }
}

export default connect(mapStateToProps, Actions)(Todo);