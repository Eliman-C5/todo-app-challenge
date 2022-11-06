import React from 'react'
import { useState } from 'react'
import { TodoContext } from './TodoContext'

export const TodoProvider = ({children}) => {

  const [isActive, setIsActive] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <TodoContext.Provider value={{
      isActive,
      setIsActive,
      isCompleted,
      setIsCompleted,
      isDarkMode,
      setIsDarkMode
    }}>
      {children}
    </TodoContext.Provider>
  )
}
