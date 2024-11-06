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
    <div className='h-96 w-full '>
      <div className='absolute left-0 top-1/2 transform -translate-y-1/2'>
      <IconCaretLeftFilled className=' lg:size-[70px] size-[45px]'/>
        </div>

        <div className=' grid place-items-center'>
        <img 
          className="h-96"
          src={ Bc_sit.src }
          alt={'asdf'}/>  
        </div>
        
        <div className='absolute right-0 top-1/2 transform -translate-y-1/2'>
        <IconCaretRightFilled className=' lg:size-[70px] size-[45px]'/>
        </div>

    </div>
  );
}