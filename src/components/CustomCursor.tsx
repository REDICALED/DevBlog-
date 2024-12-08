'use client';


import React, { useState, useEffect } from 'react';

const CustomCursor: React.FC = () => {
  
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [click, setClick] = useState(false);
  const [hover, setHover] = useState('');

  const handleMouseMove = (e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  
    const target = e.target as HTMLElement;
  
    // 버튼이나 링크일 때 포인터 커서 설정
    const isPointerElement =
      target.tagName.toLowerCase() === 'button' ||
      target.tagName.toLowerCase() === 'a' ||
      target.closest('button') !== null ||
      target.closest('a') !== null;
  
    // 입력 필드일 때
    const isInputField =
      target.tagName.toLowerCase() === 'input' ||
      target.tagName.toLowerCase() === 'textarea' ||
      target.tagName.toLowerCase() === 'select' ||
      target.closest('input') !== null ||
      target.closest('textarea') !== null ||
      target.closest('select') !== null;
  
    // hover 상태를 'input' 또는 'button'으로 설정
    if (isInputField) {
      setHover('input');
    } else if (isPointerElement) {
      setHover('button');
    } else {
      setHover('');
    }
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
          transform: click ? 'scale(0.4)' : hover === 'input' ? 'scale(1.0)' : hover === 'button' ? 'scale(1.5)' : 'scale(0.7)',
          fill: 'var(--text-color)',
        }}
      >
    {hover === 'input' ? (
      <path d="M10 2 L10 22 M6 2 L14 2 M6 22 L14 22" 
      stroke="var(--text-color)" 
      strokeWidth="2" 
      strokeLinecap="round"
/>      ) : (
      <circle cx="12" cy="12" r="10" stroke="var(--bg-color)" strokeWidth="1.5" fill="var(--text-color)" />
    )}    </svg>
    </div>
  );
};

export default CustomCursor;
