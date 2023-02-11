import React from 'react'
import { useState, useEffect } from 'react';

export const Header = () => {
  
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  useEffect(() => {
    
    isDarkMode?
      document.documentElement.classList.add('dark'):
      document.documentElement.classList.remove('dark')

  }, [isDarkMode])
  
  
  return (
    <div className={`md:h-[300px] h-[200px] bg-cover 
    ${isDarkMode ? 
      'md:bg-[url("/images/bg-desktop-dark.jpg")] bg-[url("/images/bg-mobile-dark.jpg")]' :
      'md:bg-[url("/images/bg-desktop-light.jpg")] bg-[url("/images/bg-mobile-light.jpg")]'}
    `}>
        
      <div className="relative top-[25%] flex justify-between w-[95%] md:w-[80%] mx-auto">
        <h1 className="title text-white">TODO</h1>
        {
          isDarkMode ?
          <img 
            className="h-[35px] w-[35px] cursor-pointer" 
            src="../../../images/icon-sun.svg" 
            alt="Sol para desactivar dark mode"
            onClick={() => setIsDarkMode(false)}
          />:
          <img 
            className="h-[35px] w-[35px] cursor-pointer" 
            src="../../../images/icon-moon.svg" 
            alt="Luna para activar dark mode" 
            onClick={() => setIsDarkMode(true)}
          />
        }
      </div>
          
    </div>
  )
}
