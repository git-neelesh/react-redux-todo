import { ADD_TODO, DELETE_TODO } from './actionTypes';

export const addTodo = (title, description) => {
    return {
        type: ADD_TODO,
        payload: {
            title: title,
            description: description
        }
    };
};

export const deleteTodo = title => {
    return {
        type: DELETE_TODO,
        payload: {
            title: title
        }
    };
};
