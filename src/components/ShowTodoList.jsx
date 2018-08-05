import React from 'react';
import '../App.css';

class ShowTodoList extends React.Component{
    // console.log(this.props);
    deleteTodo=(id)=>{
        console.log(id);
        this.props.delete(id)
    }
    render(){
        return(
            this.props.todos.map((todo)=>{
                return (
                    <div className='Todo'>
                        <input type="checkbox" name="check" id=""/>
                        <p> {todo.title} </p>
                        <button onClick={this.deleteTodo.bind(this,todo.id)}>X</button>
                    </div>)
            })
        )  
    }
   }
export default ShowTodoList;