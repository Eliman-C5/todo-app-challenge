import { useReducer } from "react";
import { TYPES } from "../data/Types";
import { todoReducer } from "../reducers/todoReducer";
import { AddItems } from "./AddItems"
import { TaskItem } from "./TaskItem";

const state = [
  {
    id: Date.now(),
    name: 'First task',
    //completed (Por Resolver)
  }
];

export const Dashboard = () => {
  
  const [todos, todosDispatch] = useReducer(todoReducer, state);
  
  return (
    <div className="relative -top-[100px] w-[80%] mx-auto flex flex-col z-10">
      
      <AddItems newTask={(value) => todosDispatch({type: TYPES.ADD, payload: value})} />
  
      <ul>
      
        {todos.map( todo => (
            <TaskItem key={todo.id} item={todo.name} />
          ))
        }
      
        <span>{todos.length} items left</span>
      
      </ul>
  
      <div className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit accusamus sint enim harum praesentium officia iure tempore, corrupti vero dolorum quas doloremque molestiae. Quia, expedita neque. Reiciendis et ipsum animi, cum dicta similique, at nam officia eius illum ratione error cupiditate, optio aut est. Quibusdam asperiores dolor suscipit ea perferendis.</div>
  
    </div>
  )
}
