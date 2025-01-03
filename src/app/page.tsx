// main 페이지 page 컴포넌트
import dynamic from 'next/dynamic'
import {createClient} from '@/utils/supabase/server'

const HeroHeader = dynamic(() => import('@/components/mantine/HeroHeader'), { ssr: false });
const MainPostlist = dynamic(() => import('@/components/main/MainPostlist'), { ssr: false });

export default async function Home() {
    const supabaseClient = createClient();
    const batchSize = 5;  // 한 번에 가져올 데이터 개수
    let offset = 0;
    let allData: any[] = [];

    // 배치 방식으로 데이터 가져오기
    while (true) {
        const { data: notes, error } = await supabaseClient
            .from('posts')
            .select()
            .order('date', { ascending: false })
            .range(offset, offset + batchSize - 1); // 5개씩 가져옴

        if (error || !notes.length) break;  // 데이터가 더 이상 없으면 종료

        allData = [...allData, ...notes];  // 가져온 데이터를 모두 합침
        offset += batchSize;  // 다음 배치로 이동
    }

    // 공지를 맨 앞으로 이동
    const SupaArray = allData.filter((value: any) => {
        if (value.tags.includes('공지')) {
            return true;
        }
        return false;
    });
    const otherPosts = allData.filter((value: any) => !value.tags.includes('공지'));
    const finalArray = [...SupaArray, ...otherPosts];  // 공지 먼저, 나머지 뒤에 추가
    const BeforeTagArray = await finalArray.map((value: any) => value.tags).flat(); // tags 배열을 평탄화하여 모든 태그들 모음

    // 태그 개수 계산
    const tagArray = await BeforeTagArray.reduce((acc: Record<string, number>, tag: string) => {
      // 태그가 이미 존재하면 개수 증가, 아니면 1로 설정
      acc[tag] = (acc[tag] || 0) + 1;
      return acc;
    }, {});
    console.log(tagArray);
    return (
        <div className=' '>
            <div className='row-span-1 place-items-center grid w-[100vw]'>
            </div>
            
            <div className=' mb-10'>
                <HeroHeader/>
            </div>
            <div className='row-span-1 w-full'>
                <div className='h-screen'>
                    <MainPostlist SupaArray={finalArray} tagArray={tagArray}/>
                </div>
            </div>
        </div>
    );
}
