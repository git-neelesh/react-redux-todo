import React, { Component } from 'react'
import {addTodo} from '../../actions/todoAction'
import {connect} from 'react-redux'

class AddTodo extends Component {
    state = {
        title: '',
        description: ''
    }
    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state.title, this.state.description);
        this.props.history.push('/todos');
      };
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="ui form">
                <div className="field">
                    <label>Title</label>
                    <input
                        type="text"
                        value={this.state.title}
                        onChange={this.handleChange}
                        name="title"
                        placeholder="Title"
                    />
                </div>
                <div className="field">
                    <label>Details</label>
                    <input
                        type="text"
                        value={this.state.description}
                        onChange={this.handleChange}
                        name="description"
                        placeholder="Description of the task"
                    />
                </div>
                <button className="ui button positive" type="submit">
                    Submit
              </button>
            </form>
        );
    }
}


const mapStateToProps = ({ todos }) => {
    return {
      localTodos: todos.map(todos => todos.title)
    };
  };
  export default connect(
    mapStateToProps,
    { addTodo }
  )(AddTodo);