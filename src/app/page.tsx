import dynamic from 'next/dynamic'
import HeroHeader from '@/components/mantine/HeroHeader'

  const MainPostlist = dynamic(() => import('@/components/main/MainPostlist')
    ,{
    loading: () => <p>Loading...</p>,
    ssr: false
  })
    
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
