import React, { Component } from 'react';

class TodoCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.onCreate = this.onCreate.bind(this);
    }
    handleChange(e) {
        this.setState({todo:e.target.value});
    }
    onCreate() {
        this.props.onCreate({todo:this.state.todo});
        this.setState({
            todo:''
        });
    }
    render() {
        return (
            <div>
                <p>
                    <input type="text" name="newTodo" value={this.state.todo} onChange={this.handleChange}/>
                    <button type="button" onClick={this.onCreate}>Todo 추가</button>
                </p>
            </div>
        );
    }
}

export default TodoCreate;