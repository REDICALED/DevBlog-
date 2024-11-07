'use client';


import { Image, Container, Title, Button, Group, Text, List, ThemeIcon, rem } from '@mantine/core';
import { IconCaretRightFilled, IconCaretLeftFilled } from '@tabler/icons-react';
import classes from './HeroBullets.module.css';
import dynamic from 'next/dynamic';
import { SVGProps } from 'react';
import Kobe_run from '@/assets/kobe_run.png'
import Bc_sit from '@/assets/bc_sit.png'

export function HeroHeader() {
  return (
    <div className='h-96 w-full flex  '>
      <div className=' flex-shrink-0 grid place-items-center '>
      <IconCaretLeftFilled className=' lg:size-[70px] size-[45px] h-[100vh]' />
        </div>

        <div className=' flex-grow text-center grid place-items-center'>
        <img 
          className="h-96 animate-slide-in-right"
          src={ Bc_sit.src }
          alt={'asdf'}/>  
        </div>
        
        <div className=' grid place-items-center flex-shrink-0'>
        <IconCaretRightFilled className=' lg:size-[70px] size-[45px]'/>
        </div>

    </div>
  );
}