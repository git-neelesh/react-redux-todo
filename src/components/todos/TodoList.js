import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../../actions/todoAction';

const renderTodo = (localTodos, deleteTodo) => {
    return localTodos.map(todo => {
        return (
            <tr key={todo.title}>
                <td>{todo.title}</td>
                <td>{todo.description}</td>

                <td>
                    <button
                        onClick={() => deleteTodo(todo.title)}
                        className="ui button red"
                        type="submit"
                    >
                        Delete
            </button>
                </td>
            </tr>
        );
    });
};
const TodoList = ({ localTodos, deleteTodo }) => {
    return (
        <table className="ui celled table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Action</th>
                </tr>
            </thead>
            {localTodos.length > 0 ?
                (<tbody>{renderTodo(localTodos, deleteTodo)}</tbody>)
                : 
                (<tbody><tr><td colSpan="3"><b>There is no Todo for you.</b></td></tr></tbody>)
            }
        </table>
    );
}

const mapStateToProps = (state) => {
    console.log('state', state);
    return {
        localTodos: state.todos
    };
};
export default connect(
    mapStateToProps,
    {
        deleteTodo
    }
)(TodoList);
