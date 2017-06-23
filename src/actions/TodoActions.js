export const CHECK_TODO = 'CHECK_TODO';
export const CREATE_TODO = 'CREATE_TODO';

export function checkTodo(idx) {
    return {
        type: CHECK_TODO,
        idx
    }
}

export function createTodo(newTodo) {
    return {
        type: CREATE_TODO,
        newTodo
    }
}