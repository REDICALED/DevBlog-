import Main_header from '../components/main/Main_header';
import MainPostlist from '../components/main/MainPostlist';

export default function Home() {
    return (
        <div className='h-[25vh]'>
            <div className='row-span-1'>
                <Main_header/>
            </div>
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
