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
    <div className=' flex '>
        <button 
      onClick={handleToggle} 
      className={`
        w-[60px] 
        h-[30px] 
        rounded-full 
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
          top-[0.5px] 
          w-[26px] 
          h-[26px] 
          rounded-full 
          shadow-md 
          transition-all 
          duration-300
          ${isToggled ? 'translate-x-[30px] bg-[var(--bg-color)]' : 'translate-x-[1px] bg-[var(--text-color)]'}
        `}
      />
    </button>
          <span className=' ml-1 grid place-items-center'>
        {tag}
    </span>
    </div>
  );
}