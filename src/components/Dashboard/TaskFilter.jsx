import React, { useContext, useState } from 'react'
import { TodoContext } from '../../context/TodoContext';

export const TaskFilter = ({mobile = true}) => {
  
  const {setIsActive, setIsCompleted } = useContext( TodoContext );
  const [btnFilterActive, isBtnFilterActive] = useState('ALL');

  return (
    <div 
      className={`${mobile ? 
      'flex md:hidden border border-[#e4e5f1] dark:border-btnBackground bg-[#fff] dark:bg-btnBackground rounded-lg p-4 mt-5 justify-center' 
      : 'hidden md:flex'} 
      gap-4 relative md:left-[6%] text-[#777a92] font-bold`}>
        <button onClick={() => {
          setIsActive(false);
          setIsCompleted(false);
          isBtnFilterActive('ALL');
        }} className={`text-[14px] md:text-[18px] ${btnFilterActive === 'ALL' && 'text-[#4f8af7]'}`}>All</button>
        <button onClick={() => {
          setIsActive(true);
          setIsCompleted(false);
          isBtnFilterActive('ACTIVE');
        }} className={`text-[14px] md:text-[18px] ${btnFilterActive === 'ACTIVE' && 'text-[#4f8af7]'}`}>Active</button>
        <button onClick={() => {
          setIsActive(false);
          setIsCompleted(true);
          isBtnFilterActive('COMPLETED');
        }} className={`text-[14px] md:text-[18px] ${btnFilterActive === 'COMPLETED' && 'text-[#4f8af7]'}`}>Completed</button>
    </div>
  )
}
