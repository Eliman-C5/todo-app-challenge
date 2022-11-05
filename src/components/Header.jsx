import React from 'react'

export const Header = () => {
  return (
    <div className="h-[300px] bg-cover bg-[url('/images/bg-desktop-light.jpg')]">
        
      <div className="relative top-[40%] flex justify-between w-[80%] mx-auto">
        <h1 className="text-white">TODO</h1>
        <img className="h-[35px] w-[35px] cursor-pointer" src="/images/icon-moon.svg" alt="" />
      </div>
          
    </div>
  )
}
