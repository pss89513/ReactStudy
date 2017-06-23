import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createTodo } from '../actions/TodoActions';

class TodoCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newTodo:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.onCreate = this.onCreate.bind(this);
    }
    handleChange(e) {
        this.setState({newTodo:e.target.value});
    }
    onCreate() {
        this.props.createTodo(this.state.newTodo);
        this.setState({
            newTodo:'zzz'
        });
    }
    render() {
        return (
            <div>
                <p>
                    <input type="text" name="newTodo" value={this.state.newTodo} onChange={this.handleChange}/>
                    <button type="button" onClick={this.onCreate}>Todo 추가</button>
                </p>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        createTodo: (newTodo) => {
            dispatch(createTodo(newTodo));
        }
    }
}

export default connect(null, mapDispatchToProps)(TodoCreate);