import React, { Component } from 'react'
import Todo from './Todo'
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
    }

    render () {        
        const mapToComponents = (data) => {
            return data.map((ele, idx) => {
                console.log(ele);
                return(<Todo todo={ele.todo} key={idx}/>)
            });
        }
        return (
            <div>
                {mapToComponents(this.state.todoList)}
            </div>
        )
    }
}

export default TodoList