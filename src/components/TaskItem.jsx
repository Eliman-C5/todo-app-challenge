import React from 'react'

export const TaskItem = ({ item }) => {
  return (
    <li key={item} className="border">{item}</li>
  )
}
