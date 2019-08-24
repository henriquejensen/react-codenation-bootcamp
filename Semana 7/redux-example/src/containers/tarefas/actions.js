export function addNovaTarefa() {
  return {
    type: "ADD_NOVA_TAREFA"
  };
}

export function changeNovaTarefa(tarefa) {
  return {
    type: "CHANGE_NOVA_TAREFA",
    payload: tarefa
  };
}

export function removeTarefa(id) {
  return {
    type: "REMOVE_TAREFA",
    payload: id
  };
}
