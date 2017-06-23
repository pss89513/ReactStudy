export const CHECK_TODO = 'CHECK_TODO';

export function checkTodo(idx) {
    return {
        type: CHECK_TODO,
        idx
    }
}