import React, { useState } from 'react';

export function ToggleButton( props: {tag: string} ) {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

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
        ${isToggled ? 'bg-[var(--text-color)]' : 'bg-gray-400'}        
      `}
    >
      <div 
        className={`
          absolute 
          top-[2px] 
          w-[26px] 
          h-[26px] 
          bg-[var(--bg-color)]
          rounded-full 
          shadow-md 
          transition-all 
          duration-300
          ${isToggled ? 'translate-x-[30px]' : 'translate-x-[2px]'}
        `}
      />
    </button>
          <span className=' ml-1 grid place-items-center'>
        {props.tag}
    </span>
    </div>
  );
}