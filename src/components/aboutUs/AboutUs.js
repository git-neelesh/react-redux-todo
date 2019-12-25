import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions/todoAction';


class AboutUs extends Component {
  state = {
    title: '',
    description: ''
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(
      this.state.title,
      this.state.desc
    );
    this.props.history.push('/about');
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="ui form">
        <div className="field">
          <label>
            Title
          </label>
          <input
            value={this.state.title}
            onChange={this.handleChange}
            type="text"
            name="title"
            placeholder="Title"
          />
        </div>
        <div className="field">
          <label>Description</label>
          <input
            value={this.state.description}
            onChange={this.handleChange}
            type="text"
            name="description"
            placeholder="Description"
          />
        </div>
        <button className="ui button blue" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default connect(
  null,
  {
    addTodo
  }
)(AboutUs);
