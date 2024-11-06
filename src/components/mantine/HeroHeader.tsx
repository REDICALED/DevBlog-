'use client';


import { Image, Container, Title, Button, Group, Text, List, ThemeIcon, rem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import classes from './HeroBullets.module.css';
import dynamic from 'next/dynamic';
import { SVGProps } from 'react';
import Kobe_run from '@/assets/kobe_run.png'
import Bc_sit from '@/assets/bc_sit.png'

export function HeroHeader() {
  return (
    <div className='h-96 w-full '>
        
        <div className=' grid place-items-end mr-20'>
        <img 
          className="h-96"
          src={ Bc_sit.src }
          alt={'asdf'}/>  
        </div>
    </div>
  );
}