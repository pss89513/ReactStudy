import React, { Component } from 'react';
import Todo from './Todo';
import TodoCreate from './TodoCreate';
import { connect } from 'react-redux';

class TodoList extends Component {
    
    render() {
        const mapToComponents = (data) => {
            return data.map((ele, idx) => {
                return (
                    <Todo
                        todo={ele.todo}
                        isDone={ele.isDone}
                        key={idx}
                        idx={idx}
                    />
                )
            });
        }
        return (
            <div>
                <div>
                    <TodoCreate />
                </div>
                <div>
                    {mapToComponents(this.props.todoList)}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        todoList: state.todo.get('todoList').toJS()
    }
}

export default connect(mapStateToProps)(TodoList);