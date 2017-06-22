import React, { Component } from 'react'

class Todo extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            isDone : false
        }
    }

    handleClick(){
        this.setState({isDone : !this.state.isDone})
    }

    render () {
        const doneStyle = {
            textDecoration: 'line-through',
            fontStyle: 'italic'
        };

        return (
            <ul>
                <li onClick={this.handleClick}>
                    <p style={this.state.isDone ? doneStyle : null} >{this.props.todo}</p>
                </li>
            </ul>
        )
    }
}

export default Todo