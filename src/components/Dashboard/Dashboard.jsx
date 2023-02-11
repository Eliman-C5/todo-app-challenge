import { useReducer } from "react";
import { initialState } from "../../data/initialState";
import { TYPES } from "../../data/Types";
import { todoReducer } from "../../reducers/todoReducer";
import { AddItems, TaskItem, TasksLeft } from "./"
import { TaskFilter } from "./TaskFilter";

export const Dashboard = () => {
  
  const [todos, todosDispatch] = useReducer(todoReducer, initialState);
  
  return (
    <div className="relative -top-[90px] md:-top-[100px] w-[95%] md:w-[80%] mx-auto flex flex-col z-10">
      
      <AddItems newTask={(value) => todosDispatch({type: TYPES.ADD, payload: value})} />
      
      {/* Hacer un componente aparte */}
      <ul className="border border-[#e4e5f1] dark:border-btnBackground bg-[#fff] dark:bg-btnBackground mt-5 rounded-lg shadow-md ">
      
      
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
      
      <TaskFilter />
  
      <div className="mt-20 font-bold text-center text-[#d2d3db] dark:text-[#484b6a]">Drag and drop to reorder list</div>
  
    </div>
  )
}
