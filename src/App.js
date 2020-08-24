import React, { Component } from "react";
import Todos from "./components/Todos";

import "./App.scss";

class App extends Component {
  state = {
    todos: [
      {
        id: 0,
        title: "Take out the trash!",
        completed: false,
      },
      {
        id: 1,
        title: "Buy some bread from the nearby shop!",
        completed: true,
      },
      {
        id: 2,
        title: "Park the car!",
        completed: false,
      },
    ],
  };
  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
