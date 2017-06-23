import React, { Component } from 'react';
import Todo from './Todo';
// import TodoCreate from './TodoCreate';
import { connect } from 'react-redux';
import { checkTodo } from '../actions/TodoActions';

class TodoList extends Component {
    constructor(props) {
        super(props);
        // this.handleCreate = this.handleCreate.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleCreate(newTodo) {

    }

    handleClick(idx) {
        this.props.checkTodo(idx)
    }

    render() {
        const mapToComponents = (data) => {
            return data.map((ele, idx) => {
                return (
                    <Todo
                        todo={ele.todo}
                        isDone={ele.isDone}
                        key={idx}
                        idx={idx}
                        onClick={(idx) => this.handleClick(idx)}
                    />
                )
            });
        }
        return (
            <div>
                <div>
                    {/*<TodoCreate onCreate={this.handleCreate} />*/}
                </div>
                <div>
                    {mapToComponents(this.props.todoList)}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(state.todo.get('todoList').toJS());
    return {
        todoList: state.todo.get('todoList').toJS()
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        checkTodo: (idx) => {
            dispatch(checkTodo(idx));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);