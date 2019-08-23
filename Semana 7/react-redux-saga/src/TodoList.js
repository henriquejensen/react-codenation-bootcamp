import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as TodoActions from "./store/actions";

function TodoList({ todos, addTodo }) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
      <button onClick={() => addTodo("Fazer cafe")}>Novo Todo</button>
    </ul>
  );
}

const mapStateToProps = state => ({ todos: state.todos });

const mapDispatchToProps = dispatch =>
  bindActionCreators(TodoActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
