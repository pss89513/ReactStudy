import * as actions from '../actions/TodoActions';
import { fromJS } from 'immutable';

const initialState = fromJS({
    todoList: [
        { todo: "일", isDone: false },
        { todo: "공부", isDone: false },
        { todo: "양파즙 먹기?", isDone: false },
        { todo: "운동?", isDone: false }
    ]
})

export default function (state = initialState, action) {
    const todoList = state.get('todoList');
    switch (action.type) {
        case actions.CHECK_TODO:
            return state.set('todoList', todoList.update(action.idx, todo => todo.set('isDone', !todo.get('isDone'))));

        case actions.CREATE_TODO:                        
            const newTodo = fromJS({
                todo: action.newTodo,
                isDone: false
            });
            return state.set('todoList', todoList.push(newTodo));            

        default:
            return state;
    }
}