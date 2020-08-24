import React, { Component } from "react";
import "./index.scss";

class TodoItem extends Component {
  dynamicClassName = () => {
    return this.props.todo.completed ? "completed" : "";
  };
  render() {
    return (
      <div className="todo-item">
        <div className={this.dynamicClassName()}>
          <input type="checkbox" id={this.props.todo.id} />
          <label htmlFor={this.props.todo.id}>
            {this.props.todo.id + 1}. {this.props.todo.title}
          </label>
        </div>
      </div>
    );
  }
}

export default TodoItem;
