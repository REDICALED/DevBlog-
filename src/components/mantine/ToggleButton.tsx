'use client'

import React, { useEffect, useState } from 'react';

export function ToggleButton( {tag, setCategoryState,  CategoryState}: {tag: string, setCategoryState:React.Dispatch<React.SetStateAction<any>>, CategoryState:string} ) {
  const [isToggled, setIsToggled] = useState( CategoryState === tag );

  const handleToggle = () => {
    if (tag !== CategoryState) {
      setCategoryState(tag);
      setIsToggled(!isToggled);
    }
  };

  useEffect(() => {
    setIsToggled(CategoryState === tag);
  }, [CategoryState]);


  return (
    <div className=' flex font-bold text-sm lg:text-2xl w-auto '>
        <button 
      onClick={handleToggle} 
      className={`
        lg:w-[90px] 
        lg:h-[45px]
        w-[45px]
        h-[22.5px]
        rounded-md
        relative 
        transition-transform 
        duration-300
        bg-[var(--bg-color)] border-[var(--text-color)] border-[3px]      
        ${isToggled ? 'bg-[var(--text-color)]' : 
          'bg-[var(--bg-color)]'}
        `}
      >
      <div 
        className={`
          grid place-items-center
          w-[19.5px] 
          h-[19.5px]
          lg:w-[37px] 
          lg:h-[37px]
          rounded-md 
          shadow-md 
          transition-transform 
          duration-300
          ${isToggled ? 'lg:translate-x-[45px] lg:w-[37px] lg:h-[37px] translate-x-[22.5px] bg-[var(--bg-color)]' : 
          ' translate-x-[0.5px] lg:translate-x-[1px] border-[3px] bg-[var(--bg-color)] border-[var(--text-color)]'}
        `}
      />
    </button>
          <span className=' lg:ml-2 ml-[2px] grid place-items-center '>
        {tag}
    </span>
    </div>
  );
}