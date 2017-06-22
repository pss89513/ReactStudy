import React, { Component } from 'react'

class Todo extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            isDone : false
        }
        console.log(props);
    }

    handleClick(){
        this.setState({isDone : !this.state.isDone})
    }

    render () {
        const doneStyle = {backgroundColor: 'green'};
        return (
            <ul>
                <li style={this.state.isDone ? doneStyle : null} onClick={this.handleClick}>{this.props.name}</li>
            </ul>
        )
    }
}

export default Todo