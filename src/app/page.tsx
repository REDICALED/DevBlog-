//main 페이지 page 컴포넌트
import dynamic from 'next/dynamic'
import {createClient} from '@/utils/supabase/server'


const HeroHeader = dynamic(() => import('@/components/mantine/HeroHeader'), { ssr: false });

const MainPostlist = dynamic(() => import('@/components/main/MainPostlist'), { ssr: false });
export default async function Home() {
    const supabaseClient = createClient();
    const { data: notes } = await supabaseClient.from('posts').select().order('date', { ascending: false });
    const SupaArray = await JSON.parse(JSON.stringify(notes));
    await SupaArray.forEach((value: any, index: number) => {
        if (value.tags.includes("공지")) {
            // 해당 값을 배열에서 제거
            let [removedValue] = SupaArray.splice(index, 1);
            // 맨 앞에 추가
            SupaArray.unshift(removedValue);
    }})
    return (
        <div className=' '>
            <div className='row-span-1 place-items-center grid w-[100vw]'>
            </div>
            
            <div className=' mb-10'>
                <HeroHeader/>
            </div>
            <div className='row-span-1 w-full'>
                <div className='h-screen'>
                    <MainPostlist SupaArray={SupaArray}/>
                </div>
            </div>
        </div>
    );
}
