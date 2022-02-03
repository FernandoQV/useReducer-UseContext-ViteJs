import { useReducer } from "react";
const initialState = 0;
enum Action {
  add = "add",
  decrement = "decrement",
  reset = "reset",
}
type IAction = {
  type: Action;
};
const countReducer = (state: number, _action: IAction) => {
  switch (_action.type) {
    case Action.add:
      return ++state;
    case Action.decrement:
      return --state;
    case Action.reset:
      return initialState;
    default:
      return state;
  }
  return state;
};
const CounterApp = () => {
  const [state, dispatch] = useReducer(countReducer, initialState);
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => dispatch({ type: Action.add })}>Agregar</button>
      <button onClick={() => dispatch({ type: Action.decrement })}>
        Quitar
      </button>
      <button onClick={() => dispatch({ type: Action.reset })}>Reset</button>
    </div>
  );
};

export default CounterApp;
