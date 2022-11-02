import { useReducer } from "react";
import { TYPES } from "../data/Types";
import { todoReducer } from "../reducers/todoReducer";
import { AddItems } from "./AddItems"
import { TaskFilter } from "./TaskFilter";
import { TaskItem } from "./TaskItem";

const state = [
  {
    id: Date.now(),
    name: 'First task',
    completed: false,
  }
];

export const Dashboard = () => {
  
  const [todos, todosDispatch] = useReducer(todoReducer, state);
  
  return (
    <div className="relative -top-[100px] w-[80%] mx-auto flex flex-col z-10">
      
      <AddItems newTask={(value) => todosDispatch({type: TYPES.ADD, payload: value})} />
      
      {/* Hacer un componente aparte */}
      <ul className="border border-[#e4e5f1] bg-[#fff] mt-5 rounded-lg shadow-md">
      
      
        {todos.map( todo => (
            <TaskItem 
              key={todo.id} 
              todo={todo} 
              todosDispatch={todosDispatch} 
            />
          ))
        }
      
        <div className="flex justify-between  p-4">
        
          <span>{todos.filter(todo => todo.completed === false).length} items left</span>
          
          <button onClick={() => todosDispatch({type: TYPES.CLEAR_COMPLETED_TODOS})}>
            Clear completed
          </button>
          
        </div>
      
      </ul>
      
      <TaskFilter />
  
      <div className="text-[#484b6a] mt-20 font-bold text-center">Drag and drop to reorder list</div>
  
    </div>
  )
}
