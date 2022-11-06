import React, { useContext } from 'react'
import { TodoContext } from '../../context/TodoContext';
import { TYPES } from '../../data/Types'

export const TaskItem = ({ todosDispatch, todo }) => {

  const {isActive, isCompleted} = useContext( TodoContext );

  return (
    <li 
      className={`
        ${isActive && todo.completed ? 'hidden' : ''} 
        ${isCompleted && !todo.completed ? 'hidden' : ''}  
        border-b dark:border-[#484b6a] flex justify-between p-4 border-[#e4e5f1] items-center`}
    >
    
      <div 
        className='circle rounded-full border border-[#e4e5f1] dark:border-[#777a92]' 
        onClick={() => {
          todosDispatch({type: TYPES.COMPLETED, payload: {...todo, completed: !todo.completed}});
        }}>
      </div>
      
      <p className={`${todo.completed && 'line-through'} text-[#484b6a] dark:text-[#d2d3db] font-bold`}>{todo.name}</p>
      
      <img className="cursor-pointer h-[15px] w-[15px]" src='/images/icon-cross.svg' onClick={() => todosDispatch({type: TYPES.DELETE, payload: todo.id})}></img>
      
    </li>
  )
}
