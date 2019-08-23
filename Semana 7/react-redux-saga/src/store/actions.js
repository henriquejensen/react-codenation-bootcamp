export const addTodo = text => ({
  type: "ASYNC_ADD_TODO",
  payload: {
    text
  }
});
