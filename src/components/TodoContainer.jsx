import React from 'react';
import AddTodo from './AddTodo';
import  '../App.css';
import ShowTodoList from './ShowTodoList';

class TodoContainer extends React.Component{
    state ={
        todos:[]
    }
    addHandler(newTodo){
        console.log(newTodo);
        
        let prevTodos = [...this.state.todos, newTodo]
        console.log(prevTodos);
        
        this.setState({todos:prevTodos},
        () =>{
            console.log(this.state.todos);
        });
    }

    deleteHandler=(id)=>{
        console.log("inside deletehandler");
        console.log(id);
        let prevState = [ ...this.state.todos];
        let todosAfterDeletion=prevState.filter(each=>each.id!=id);
        console.log(todosAfterDeletion);
        this.setState({todos:todosAfterDeletion});
    }
    render(){
        return(
            <div className='TodoContainer'>
                <h6>Todo List</h6>
                <AddTodo addHandler={this.addHandler.bind(this)}/>
                <ShowTodoList delete={this.deleteHandler} todos={this.state.todos} />
            </div>)

    }
}

export default TodoContainer;