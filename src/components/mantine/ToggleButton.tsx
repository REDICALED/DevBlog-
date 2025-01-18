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
    <div className=' flex font-bold text-sm lg:text-xl w-auto '>
        <button 
      onClick={handleToggle} 
      className={`
        lg:w-[60px] 
        lg:h-[30px]
        w-[45px]
        h-[22.5px]
        rounded-md
        relative 
        transition-all 
        duration-300
        border-2
        border-[var(--text-color)]
        ${isToggled ? 'bg-[var(--text-color)]' : 'bg-[var(--bg-color)]'}        
      `}
    >
      <div 
        className={`
          absolute 
          lg:top-[0.5px] 
          top-[0px]
          w-[19.5px] 
          h-[19.5px]
          lg:w-[26px] 
          lg:h-[26px]
          rounded-md 
          shadow-md 
          transition-all 
          duration-300
          ${isToggled ? 'lg:translate-x-[30px] translate-x-[22.5px] bg-[var(--bg-color)]' : ' translate-x-[0.5px] lg:translate-x-[1px] bg-[var(--text-color)]'}
        `}
      />
    </button>
          <span className=' lg:ml-1 ml-[2px] grid place-items-center'>
        {tag}
    </span>
    </div>
  );
}