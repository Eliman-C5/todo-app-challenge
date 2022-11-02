import { Dashboard } from "./components/Dashboard";
import { TodoProvider } from "./context/TodoProvider";

function TodoApp() {

  return (
  <TodoProvider>
    <div className="">
    
      <div className="h-[200px] bg-cover bg-[url('/images/bg-mobile-light.jpg')]"></div>
      
      <Dashboard />
    
    </div>
  </TodoProvider>
    
  )
}

export default TodoApp
