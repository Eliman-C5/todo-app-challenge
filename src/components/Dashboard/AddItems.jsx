import React, { useState } from 'react'

export const AddItems = ({newTask}) => {

  const [inputValue, setInputValue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    
    //Si el valor es menor o igual a 1 no se agrega
    if (inputValue.length <= 1 ) return
    
    //Enviamos el valor del input en una funcion a traves de las props
    newTask({
      id: Date.now(),
      name: inputValue,
      completed: false,
    });
    
    //Al enviarse la prop, ponemos la cajita vacia otra vez
    setInputValue("");
    
  }
  
  const onChange = (e) => {
  
    setInputValue(e.target.value);
    
  }
  
  return (
    <form onSubmit={onSubmit}>
      <input 
        type="text"
        placeholder="Create a new todo..."
        value={inputValue}
        onChange={onChange}
        className="font-bold p-4 w-full rounded-lg outline-0 bg-[#fff] dark:bg-btnBackground dark:text-[#cacde8]" 
      />
    </form>
  )
}
