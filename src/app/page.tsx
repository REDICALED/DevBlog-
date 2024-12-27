//main 페이지 page 컴포넌트

import HeroHeader from '@/components/mantine/HeroHeader'
import {createClient} from '@/utils/supabase/server'
import MainPostlist from '@/components/main/MainPostlist'
    
export default async function Home() {
    const supabaseClient = createClient();
    const { data: notes } = await supabaseClient.from('posts').select().order('date', { ascending: false });
    const supaArray = await JSON.parse(JSON.stringify(notes));
    return (
        <div className=' '>
            <div className='row-span-1 place-items-center grid w-[100vw]'>
            </div>
            
            <div className=' mb-10'>
                <HeroHeader/>
            </div>
            <div className='row-span-1 w-full'>
                <div className='h-screen'>
                    <MainPostlist supaArray={supaArray}/>
                </div>
            </div>
        </div>
    );
}
