import React from "react";

function Tarefas(props) {
  const { tarefas, removeTarefa } = props;
  return (
    <ul>
      {tarefas.map((tarefa, index) => {
        return (
          <li key={tarefa}>
            <div>
              {tarefa}
              <button onClick={() => removeTarefa(index)}>Deletar</button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default Tarefas;
