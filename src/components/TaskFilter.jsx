import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext';

export const TaskFilter = () => {
  
  const {setIsActive, setIsCompleted } = useContext( TodoContext );

  {/* Definir un componente en Tailwind para estilos repetidos (PENDIENTE) */}
  return (
    <div className="border border-[#e4e5f1] bg-[#fff] mt-5 rounded-lg shadow-md flex justify-center gap-8 p-4 text-[#484b6a] font-bold">
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
