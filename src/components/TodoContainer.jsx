import React from 'react';
import AddTodo from './AddTodo';
import  '../App.css';

class TodoContainer extends React.Component{
    render(){
        return(
            <div className='TodoContainer'>
                <h6>Todo List</h6>
                <AddTodo/>
            </div>)

    }
}

export default TodoContainer;