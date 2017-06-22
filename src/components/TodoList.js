import React, { Component } from 'react'
import Todo from './Todo'
class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:[
                {name:"김철수"},
                {name:"김또치"},
                {name:"김영희"}
            ]
        }
    }

    render () {        
        const mapToComponents = (data) => {
            return data.map((ele, idx) => {
                console.log(ele);
                return(<Todo name={ele.name} key={idx}/>)
            });
        }
        return (
            <div>
                {mapToComponents(this.state.data)}
            </div>
        )
    }
}

export default TodoList