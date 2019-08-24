const INITIAL_STATE = {
  tarefa: "",
  tarefas: ["Tarefa 300", "Tarefa 2", "Tarefa 3"]
};

export default function reducer(stateStore = INITIAL_STATE, action) {
  console.log("store action", action);
  switch (action.type) {
    case "CHANGE_NOVA_TAREFA": {
      return {
        ...stateStore,
        tarefa: action.payload
      };
    }
    case "ADD_NOVA_TAREFA": {
      const { tarefa, tarefas } = stateStore;
      return {
        tarefas: [...tarefas, tarefa],
        tarefa: ""
      };
    }
    case "REMOVE_TAREFA": {
      const novasTarefas = stateStore.tarefas.filter(
        (tarefa, index) => index !== action.payload
      );
      // atualiza o state com o novo array filtrado
      return {
        ...stateStore,
        tarefas: novasTarefas
      };
    }
    default:
      return stateStore;
  }
}
