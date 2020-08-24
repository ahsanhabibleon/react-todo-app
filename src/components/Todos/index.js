import React, { Component } from "react";
import TodoItem from "../TodoItem";
import "./index.scss";

class Todos extends Component {
  render() {
    const todo = this.props.todos.map((todo) => <TodoItem key={todo.id} todo={todo} />);
    return todo
  }
}

export default Todos;
