import React from 'react'
import { TYPES } from '../data/Types'

export const TaskItem = ({ todosDispatch, todo }) => {
  return (
    <li className="border-b flex justify-between p-4 border-[#e4e5f1;] items-center">
      <div 
        className='circle rounded-full' 
        onClick={() => todosDispatch({type: TYPES.COMPLETED, payload: {...todo, completed: !todo.completed}})}>
      </div>
      <p className={`${todo.completed} text-[#484b6a] font-bold`}>{todo.name}</p>
      <button className="close" onClick={() => todosDispatch({type: TYPES.DELETE, payload: todo.id})}>X</button>
    </li>
  )
}
