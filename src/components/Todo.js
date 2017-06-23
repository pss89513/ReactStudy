import React, { Component } from 'react'
import { connect } from 'react-redux'
import {checkTodo} from '../actions/TodoActions'

class Todo extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            isDone: false
        }
    }

    handleClick() {
        this.props.checkTodo(this.props.idx);
    }

    render() {
        const doneStyle = {
            textDecoration: 'line-through',
            fontStyle: 'italic'
        };

        return (
            <ul>
                <li onClick={this.handleClick}>
                    <p style={this.props.isDone ? doneStyle : null} >{this.props.todo}</p>
                </li>
            </ul>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        checkTodo: (idx) => {
            dispatch(checkTodo(idx));
        }
    }
}

export default connect(null, mapDispatchToProps)(Todo);