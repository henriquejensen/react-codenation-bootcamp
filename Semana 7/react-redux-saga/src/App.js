import React from "react";
import TodoList from "./TodoList";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <h1>App</h1>
      <TodoList />
    </Provider>
  );
}

export default App;
