import React from 'react'
import { useState } from 'react'
import { TodoContext } from './TodoContext'

export const TodoProvider = ({children}) => {

  const [isActive, setIsActive] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <TodoContext.Provider value={{
      isActive,
      setIsActive,
      isCompleted,
      setIsCompleted,
    }}>
      {children}
    </TodoContext.Provider>
  )
}
