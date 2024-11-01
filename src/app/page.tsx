import Main_header from '../components/main/Main_header';
import MainPostlist from '../components/main/MainPostlist';

export default function Home() {
    return (
        <div className=''>
            <div style={{ position: 'fixed', left: '3.5%', top: '0', width: '2.5px', height: '100%', backgroundColor: 'var(--text-color)' }}></div>
            <div className='row-span-1 place-items-center grid'>
                <Main_header/>
            </div>
            <hr className=" h-[2.5px] my-8 border-0 " style={{ backgroundColor: 'var(--text-color)' }}/>
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
