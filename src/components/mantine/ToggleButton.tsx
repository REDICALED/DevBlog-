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
    <div className=' flex font-bold text-sm lg:text-3xl w-auto '>
        {/* <button 
      onClick={handleToggle} 
      className={`
        lg:w-[90px] 
        lg:h-[45px]
        w-[45px]
        h-[22.5px]
        lg:rounded-sm
        rounded-[1px]
        relative 
        transition-all 
        duration-300
        bg-[var(--bg-color)]      
        `
      }
      style={{
        backgroundColor: isToggled ? 'var(--text-color)' : 'color-mix(in srgb, var(--bg-color) 70%, var(--text-color))',
      }}

      >
      <div 
        className={`
          grid place-items-center
          lg:rounded-sm
          rounded-[1px]
          transition-transform 
          duration-300
          
          ${isToggled ? 'lg:translate-x-[47px] translate-x-[22.5px] lg:w-[39px] lg:h-[39px] h-[19.5px] w-[19.5px] ' : 
          ' translate-x-[4px] lg:translate-x-[5px] lg:w-[37px] lg:h-[37px] h-[18px] w-[18px] '}
        `}

        style={{
          backgroundColor: isToggled ? 'var(--bg-color)' : 'color-mix(in srgb, var(--bg-color) 30%, var(--text-color))',
        }}
      />
    </button>
          <span className=' lg:ml-[6px] ml-[4px] grid place-items-center '>
        {tag}
    </span> */}

    <button
    onClick={handleToggle}
    style={{
      backgroundColor: isToggled ? 'var(--text-color)' : '',
      color: isToggled ? 'var(--bg-color)' : '',
    }}
    className="relative group  text-[var(--text-color)] py-2 px-6 lg:px-10 rounded-sm 
    hover:bg-[var(--text-color)] hover:text-[var(--bg-color)] transition-all duration-300
    ">
  {tag}
  <span
    className="absolute top-0 left-0 w-3 h-3 border-t-[3px] border-l-[3px] 
    lg:w-4 lg:h-4 lg:border-t-4 lg:border-l-4 rounded-sm  border-[var(--text-color)]"
  ></span>
  <span
    className="absolute top-0 right-0 w-3 h-3 border-t-[3px] border-r-[3px] 
    lg:w-4 lg:h-4 lg:border-t-4 lg:border-r-4 rounded-sm border-[var(--text-color)]"
  ></span>
  <span
    className="absolute bottom-0 left-0 w-3 h-3 border-b-[3px] border-l-[3px] 
    lg:w-4 lg:h-4 lg:border-b-4 lg:border-l-4 rounded-sm border-[var(--text-color)]"
  ></span>
  <span
    className="absolute bottom-0 right-0 w-3 h-3 border-b-[3px] border-r-[3px] 
    lg:w-4 lg:h-4 lg:border-b-4 lg:border-r-4 rounded-sm border-[var(--text-color)]"
  ></span>
</button>
    </div>
  );
}