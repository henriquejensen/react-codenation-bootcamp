import { createStore } from "redux";
import reducerTarefas from "../containers/tarefas/reducer";

const store = createStore(reducerTarefas);

export default store;

