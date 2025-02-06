import { createRoot } from "react-dom/client";
import MainView from "./components/main-view/main-view";
import { createStore } from "redux";
import { addTodo, toggleTodo, deleteTodo } from "./actions";
import todos from "./reducers";
import "./index.scss";

const store = createStore(todos);

console.log("Initial State", store.getState());

store.dispatch(addTodo("Dispatch my first action"));
console.log("State after adding first todo", store.getState());

store.dispatch(addTodo("Learn Redux basics"));
store.dispatch(addTodo("Create a Redux-powered To-Do app"));
console.log("State after adding more todos", store.getState());

store.dispatch(toggleTodo(0));
console.log("State after toggling first todo", store.getState());

store.dispatch(toggleTodo(1));
store.dispatch(toggleTodo(2));
console.log("State after toggling more todos", store.getState());

store.dispatch(deleteTodo(1));
console.log("State after deleting second todo:", store.getState());

function App() {
  return <MainView />;
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);
