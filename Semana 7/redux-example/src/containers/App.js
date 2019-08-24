import React from "react";
import { connect } from "react-redux";
import Tarefas from "./tarefas";
import {
  addNovaTarefa,
  changeNovaTarefa,
  removeTarefa
} from "./tarefas/actions";

class App extends React.Component {
  handleTarefa = event => {
    this.props.dispatch(changeNovaTarefa(event.target.value));
  };

  addNovaTarefa = () => {
    this.props.dispatch(addNovaTarefa());
  };

  removeTarefa = id => {
    this.props.dispatch(removeTarefa(id));
  };

  render() {
    console.log("App", this.props);
    const { tarefas, tarefa } = this.props;
    return (
      <div className="App">
        <h1>Tarefas</h1>
        <div>
          <input value={tarefa} onChange={this.handleTarefa} />
          <button onClick={this.addNovaTarefa}>Nova Tarefa</button>
        </div>
        <Tarefas tarefas={tarefas} removeTarefa={this.removeTarefa} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("mapStateToProps", state);
  return {
    tarefa: state.tarefa,
    tarefas: state.tarefas
  };
}

export default connect(mapStateToProps)(App);
