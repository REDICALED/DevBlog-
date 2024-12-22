import React, { useEffect, useState } from 'react';
import { CategoryState } from "@/Atoms/CategoryAtom"
import { CategoryAllState } from "@/Atoms/CategoryAllAtom"

import { useRecoilState } from "recoil";

export function ToggleAllButton() {
  const [isToggled, setIsToggled] = useState(true);
  const [category, setCategory] = useRecoilState(CategoryState);
  const [categoryall, setCategoryAll] = useRecoilState(CategoryAllState);

  const handleToggle = () => {
    if (isToggled) {
      setIsToggled(false);
      setCategoryAll(0);
    } else {
      setCategoryAll(2);
      setIsToggled(true);
    }
  };

    useEffect(()=> {
      console.log(category)
      console.log(category.length)

      if (category.length === 4) {
        setIsToggled(true);
      setCategoryAll(0);
      }
      else if (category.length === 0) {
        setIsToggled(false);
        setCategoryAll(2);
      }
      else{
        setIsToggled(false);
        setCategoryAll(1);
      }
    },[category])

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
        {"All"}
    </span>
    </div>
  );
}