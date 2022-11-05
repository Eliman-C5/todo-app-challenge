import { useReducer } from "react";
import { initialState } from "../data/initialState";
import { TYPES } from "../data/Types";
import { todoReducer } from "../reducers/todoReducer";
import { AddItems, TaskItem, TasksLeft } from "./index"

export const Dashboard = () => {
  
  const [todos, todosDispatch] = useReducer(todoReducer, initialState);
  
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
      
        <TasksLeft todos={todos} todosDispatch={todosDispatch} />
      
      </ul>
  
      <div className="text-[#484b6a] mt-20 font-bold text-center">Drag and drop to reorder list</div>
  
    </div>
  )
}
