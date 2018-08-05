import React from 'react';

class AddTodo extends React.Component{
        state={
            inputText : ' '
        }
   
    changeValue(event){
         this.setState({inputText:event.target.value})  
    }
    onSubmit(){
        let newTodo={
            id: Date.now(),
            check: false,
            title:this.state.inputText
        }
        console.log("Newtodo ->");
        console.log(newTodo);
        this.props.addHandler(newTodo)
    }
    render(){
        console.log(this.state.inputText);
        
        return(
            <div>
                <input value={this.state.inputText} onChange={this.changeValue.bind(this)}/>
                <button onClick={this.onSubmit.bind(this)}>Submit</button>
                </div>
        )
    }
}

export default AddTodo;