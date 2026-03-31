// main 페이지 page 컴포넌트
import dynamic from 'next/dynamic'

const HeroHeader = dynamic(() => import('@/components/mantine/HeroHeader'), { ssr: false });
const MainPostlist = dynamic(() => import('@/components/main/MainPostlist'), { ssr: false });

export default async function Home() {
 


    return (
        <div className=' '>

            
            <div className=''>
                <HeroHeader/>
            </div>
            <div className=' w-full'>
                <div className='h-screen'>
                </div>
            </div>
        </div>
    );
}
