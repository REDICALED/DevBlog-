import Main_header from '../components/main/Main_header';
import MainPostlist from '../components/main/MainPostlist';
import {HeroHeader} from  '@/components/mantine/HeroHeader'

export default function Home() {
    return (
        <div className=''>
            <div className='row-span-1 place-items-center grid'>
                <Main_header/>
            </div>
            <hr className=" h-[2.5px] my-8 border-0 " style={{ backgroundColor: 'var(--text-color)' }}/>
            <div style={{ borderColor: 'var(--text-color)'}} className=" mx-10 h-5 border-l-2 border-r-2 border-t-2"></div>
            <HeroHeader/>
            <div style={{ borderColor: 'var(--text-color)'}} className=" mx-10 h-5 border-l-2 border-r-2 border-b-2"></div>

            <div className='row-span-1 w-full'>
                <div className='h-screen grid grid-cols-3'>
                    <p></p>
                    <div className=' col-span-2'>
                    <MainPostlist/>

                    </div>
                </div>
            </div>
        </div>
    );
}
