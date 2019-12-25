import { ADD_TODO, DELETE_TODO } from '../actions/actionTypes';

const todoReducer = (listOfTodos = [], action) => {
    if (action.type === ADD_TODO) {
        return [...listOfTodos, action.payload];
    } else if (action.type == DELETE_TODO) {
        return listOfTodos.filter( todo => {return todo.title !== action.payload.title})
    }
    return listOfTodos;
};
export default todoReducer;
