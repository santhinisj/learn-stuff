import React from 'react';

class Second extends React.Component{
    render(){
        return (
        <div>
        <h1>This is a heading in the second Component</h1>
        <p>{this.props.appValues.hello}</p>
        </div>
)

    }
}

export default Second;