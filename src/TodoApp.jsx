import { Dashboard } from "./components/Dashboard/Dashboard";
import { Header } from "./components/Header/Header";
import { TodoProvider } from "./context/TodoProvider";

function TodoApp() {

  return (
  <TodoProvider>
    <div className="">
      <Header />
      <Dashboard />
    </div>
  </TodoProvider>   
  )
}

export default TodoApp
