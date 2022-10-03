import { useState } from "react"
import { AddItems } from "./AddItems"
import { TaskItem } from "./TaskItem";

export const Dashboard = () => {

  const [items, setItems] = useState(["First Task"]);
  
  const itemsList = (newItem) => {
  
    console.log(newItem)
    
    //Si el valor que se recibe ya esta en la lista de tareas, no se agregara
    if (items.includes(newItem)) return;
    
    //Se agrega el valor que se recibe de la prop, y a medida que el usuario vaya agregando mas tareas
    //Se iran agregando
    setItems([...items, newItem])
  
  }
  
  return (
    <div className="relative -top-[100px] w-[80%] mx-auto flex flex-col z-10">
      
      <AddItems newTask={(value) => itemsList(value)} />
  
      <ul>
      
        {items.map( item => (
            <TaskItem item={item} />
          ))
        }
      
        <span>{items.length} items left</span>
      
      </ul>
  
      <div className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit accusamus sint enim harum praesentium officia iure tempore, corrupti vero dolorum quas doloremque molestiae. Quia, expedita neque. Reiciendis et ipsum animi, cum dicta similique, at nam officia eius illum ratione error cupiditate, optio aut est. Quibusdam asperiores dolor suscipit ea perferendis.</div>
  
    </div>
  )
}
