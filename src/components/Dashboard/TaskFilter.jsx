import React, { useContext } from 'react'
import { TodoContext } from '../../context/TodoContext';

export const TaskFilter = () => {
  
  const {setIsActive, setIsCompleted } = useContext( TodoContext );

  {/* Definir un componente en Tailwind para estilos repetidos (PENDIENTE) */}
  return (
    <div className="flex gap-4 relative left-[6%] text-[#777a92] font-bold">
        <button onClick={() => {
          setIsActive(false);
          setIsCompleted(false);
        }}>All</button>
        <button onClick={() => {
          setIsActive(true);
          setIsCompleted(false);
        }}>Active</button>
        <button onClick={() => {
          setIsActive(false);
          setIsCompleted(true);
        }}>Completed</button>
    </div>
  )
}
