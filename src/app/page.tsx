import { motion } from 'framer-motion';
import MainPostlist from '../components/main/MainPostlist';
import {HeroHeader} from  '@/components/mantine/HeroHeader'
import {Search_input} from '@/components/mantine/Search_input';

import dynamic from 'next/dynamic';
const BlinkerBar = dynamic(() => import('../components/main/BlinkerBar'), {
    ssr: false, // 클라이언트 사이드에서만 렌더링하도록 설정
  });

const Main_header = dynamic(() => import('../components/main/Main_header'), {
    ssr: false, // 클라이언트 사이드에서만 렌더링하도록 설정
  });


export default function Home() {

    
    return (
        <div className=' '>
            <div className='row-span-1 place-items-center grid w-[100vw]'>
            </div>
            
            <div className=' mb-10'>
                <HeroHeader/>
            </div>
            <div className='row-span-1 w-full'>
                <div className='h-screen'>
                    <MainPostlist/>
                </div>
            </div>
        </div>
    );
}
