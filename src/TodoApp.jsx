import { Dashboard } from "./components/Dashboard/Dashboard";
import { Header } from "./components/Header/Header";
import { TodoProvider } from "./context/TodoProvider";
import { DndProvider} from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function TodoApp() {

  return (
  <DndProvider backend={HTML5Backend}>
  <TodoProvider>
    <div className="">
      <Header />
      <Dashboard />
    </div>
  </TodoProvider>   
  </DndProvider>
  )
}

export default TodoApp
