'use client';


import React, { useState, useEffect } from 'react';

const CustomCursor: React.FC = () => {
  
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [click, setClick] = useState(false);
  const [hover, setHover] = useState(false);

  const handleMouseMove = (e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });

    const target = e.target as HTMLElement;
    
    // 버튼이나 링크일 때 포인터 커서 설정
    const isPointerElement = 
      target.tagName.toLowerCase() === 'button' || 
      target.tagName.toLowerCase() === 'a' ||
      target.closest('button') !== null ||
      target.closest('a') !== null;
      ;
    
    setHover(isPointerElement);
  };

  const handleMouseDown = () => {
    setClick(true);
  };

  const handleMouseUp = () => {
    setClick(false);
  };


  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: position.y,
        left: position.x,
        pointerEvents: 'none',
        transform: 'translate(-50%, -50%)',
        zIndex: 9999,
      }}
      className=' lg:block hidden'
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        style={{
          transition: 'transform 0.1s ease-out',
          transform: click ? 'scale(0.4)' : hover ? 'scale(1.5)'  : 'scale(0.7)',
          fill: 'var(--text-color)',
        }}
      >
        <circle cx="12" cy="12" r="10" />
      </svg>
    </div>
  );
};

export default CustomCursor;
