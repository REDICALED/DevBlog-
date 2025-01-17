// main 페이지 page 컴포넌트
import dynamic from 'next/dynamic'
import {createClient} from '@/utils/supabase/server'

const HeroHeader = dynamic(() => import('@/components/mantine/HeroHeader'), { ssr: false });
const MainPostlist = dynamic(() => import('@/components/main/MainPostlist'), { ssr: false });

export default async function Home() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/get-all-post`, {
        method: 'GET',
        cache: 'force-cache',
      });
    const result = await response.json();
      console.log(result)
      // 공지를 맨 앞으로 이동

    const BeforeTagArray = await result.notes.map((value: any) => value.tags).flat(); // tags 배열을 평탄화하여 모든 태그들 모음

    // 태그 개수 계산
    const tagArray = await BeforeTagArray.reduce((acc: Record<string, number>, tag: string) => {
      // 태그가 이미 존재하면 개수 증가, 아니면 1로 설정
      acc[tag] = (acc[tag] || 0) + 1;
      return acc;
    }, {});
    return (
        <div className=' '>
            <div className='row-span-1 place-items-center grid w-[100vw]'>
            </div>
            
            <div className=' mb-10'>
                <HeroHeader/>
            </div>
            <div className='row-span-1 w-full'>
                <div className='h-screen'>
                    <MainPostlist SupaArray={result.notes} tagArray={tagArray}/>
                </div>
            </div>
        </div>
    );
}
