import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as TodoActions from "./store/actions";

function TodoList({ todos, requestTodoList }) {
  return (
    <div>
      <ul>
        {todos.data.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
      <button onClick={() => requestTodoList()}>Carregar dados</button>
    </div>
  );
}

const mapStateToProps = state => ({ todos: state.todos });

const mapDispatchToProps = dispatch =>
  bindActionCreators(TodoActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
