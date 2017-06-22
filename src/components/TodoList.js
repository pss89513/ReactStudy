import React, { Component } from 'react'
import Todo from './Todo'
import TodoCreate from './TodoCreate'
import update from 'react-addons-update'
class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            todoList:[
                {todo:"공부"},
                {todo:"운동(?)"},
                {todo:"일"}
            ]
        }
        this.handleCreate = this.handleCreate.bind(this);
    }
    handleCreate(newTodo){
        this.setState({
            todoList:update(
                this.state.todoList,
                {$push:[newTodo]}
            )
        })
    }
    render () {        
        const mapToComponents = (data) => {
            return data.map((ele, idx) => {
                console.log(ele);
                return(<Todo todo={ele.todo} key={idx} idx={idx}/>)
            });
        }
        return (
            <div>
                <div>
                    <TodoCreate onCreate={this.handleCreate}/>
                </div>
                <div>
                    {mapToComponents(this.state.todoList)}
                </div>
            </div>
        )
    }
}

export default TodoList