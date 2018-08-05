import React from 'react';

class AddTodo extends React.Component{
        state={
            inputText : ' '
        }
   
    changeValue(event){
        console.log('iNITIAL VALUE');
        // console.log(this.state.inputText);
        console.log("event.target.value");
        console.log(event.target.value);
        console.log(this.state);
         this.setState({inputText:event.target.value})
         console.log(this.state.inputText);
         
        
    }
    render(){
        console.log(this.state.inputText);
        
        return(
            <div>
                <input value={this.state.inputText} onChange={this.changeValue.bind(this)}/>
                </div>
        )
    }
}

export default AddTodo;