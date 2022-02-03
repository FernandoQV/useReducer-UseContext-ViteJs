import React, { useReducer, useState } from "react";
type Todo = {
  id: number;
  title: string;
};
enum Action {
  add = "add",
  delete = "delete",
  update = "update",
}
type IAction = { type: Action; payload: { id?: number; title?: string } };

const TodoReducer = (todos: Todo[], action: IAction): Todo[] => {
  switch (action.type) {
    case Action.add: {
      return [...todos, action.payload as Todo];
    }
    case Action.delete: {
      return todos.filter((todo) => todo.id != action.payload.id);
    }
    case Action.update: {
      const todoUpdate = { ...action.payload } as Todo;
      return todos.map((todo) =>
        todo.id === todoUpdate.id ? todoUpdate : todo
      );
    }
    default:
      [...todos];
  }
  return [...todos];
};
const initialTodos: Todo[] = [
  {
    id: 1,
    title: "title del todo 1",
  },
  {
    id: 2,
    title: "title del todo 2",
  },
];
const TodoApp = () => {
  const [titleTodo, setTitleTodo] = useState<string>("");
  const [todos, dispatch] = useReducer(TodoReducer, initialTodos);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //los actiond del reducer tienen que ser funciones puras ossea no deen mutar el state ni usar funciones randon delntro de el
    const newTodo: Todo = {
      id: (Math.random() * 100),
      title: titleTodo,
    };
    dispatch({ type: Action.add, payload: newTodo });
    setTitleTodo("");
  };
  const handleUpdateTodo=(todo:Todo)=>{
      const title=titleTodo
      console.log(todo,title);
      const newTodo={...todo,title}
      dispatch({
          type:Action.update,
          payload:{...newTodo}
      })
      setTitleTodo('')
  }
  return (
    <div>
      <h2>TodoApp</h2>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Add todo"
          value={titleTodo}
          onChange={(e) => setTitleTodo(e.currentTarget.value)}
        />
      </form>
      <ul>
        {todos.map((todo: Todo) => (
          <li key={todo.id} style={{ display: "flex", gap: "1rem" }}>
            <span>{todo.title}</span>
            <button
              onClick={() =>
                dispatch({
                  type: Action.delete,
                  payload: { id: todo.id },
                }) as undefined
              }
            >
              Delete
            </button>
            <button
              onClick={()=>handleUpdateTodo(todo)}
            >
             Update
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
