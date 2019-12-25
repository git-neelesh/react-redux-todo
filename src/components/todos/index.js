import React from 'react';
import TodoList from './TodoList'
import { Link } from 'react-router-dom'
const Todos = (props) => {
    return (
        <div>
            <div>
                <Link to={`${props.match.url}/new`} className="ui button positive">Create Todo</Link>
            </div>
            <TodoList />
        </div>
    );
}
export default Todos