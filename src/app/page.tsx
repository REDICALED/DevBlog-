// main 페이지 page 컴포넌트
import dynamic from 'next/dynamic'
import { headers } from 'next/headers';

const HeroHeader = dynamic(() => import('@/components/mantine/HeroHeader'), { ssr: false });
const MainPostlist = dynamic(() => import('@/components/main/MainPostlist'), { ssr: false });

export default async function Home() {
    const host = headers().get("host");
    const protocal = process?.env.NODE_ENV==="development"?"http":"https"
    const response = await fetch(`${protocal}://${host}/api/get-all-post`, {
        method: 'GET',
        cache: 'force-cache',
        next: { tags: ['posts'] },
      });
    const result = await response.json();
    
    const SuggestArray = result.notes.reduce((acc: Record<string, any>, post: any) => {
        // 카테고리별로 최신 3개의 포스트만 가져오고, 필요한 필드만 선택
        const filteredPost = {
            uuid: post.uuid,
            title: post.title,
            tags: post.tags,
            date: post.date,
            titleimage: post.titleimage,
        };

        // 카테고리별로 3개의 최신 포스트만 추가
        if (acc[post.category].length < 3) {
            acc[post.category].push(filteredPost);
        }
        return acc;
    }, { cs: [], dailylife: [], art: [], etc: [] });

    const BeforeTagArray = await result.notes.map((value: any) => value.tags).flat(); // tags 배열을 평탄화하여 모든 태그들 모음

    // 태그 개수 계산
    const puretagArray = await BeforeTagArray.reduce((acc: Record<string, number>, tag: string) => {
      // 태그가 이미 존재하면 개수 증가, 아니면 1로 설정
      acc[tag] = (acc[tag] || 0) + 1;
      return acc;
    }, {});

    const categories = ['cs', 'dailylife', 'art', 'etc'];
    const categoryTags = categories.reduce((acc: Record<string, string[]>, category: string) => {
        // 해당 카테고리의 태그만 필터링하여 저장
        acc[category] = result.notes
            .filter((post: any) => post.category === category) // 해당 카테고리에 속하는 포스트만 필터링
            .map((post: any) => post.tags) // 해당 포스트의 태그를 가져옴
            .flat(); // 태그를 평탄화
        return acc;
    }, {});

    const tagArrayByCategory = Object.keys(categoryTags).reduce((acc: Record<string, Record<string, number>>, category: string) => {
        acc[category] = categoryTags[category].reduce((tagAcc: Record<string, number>, tag: string) => {
            // 태그가 이미 존재하면 개수 증가, 아니면 1로 설정
            tagAcc[tag] = (tagAcc[tag] || 0) + 1;
            return tagAcc;
        }, {});
        return acc;
    }, {});

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
            
            <div className=''>
                <HeroHeader/>
            </div>
            <div className='row-span-1 w-full'>
                <div className='h-screen'>
                    <MainPostlist SuggestArray={SuggestArray} SupaArray={result.notes} puretagArray={puretagArray} tagArray={tagArrayByCategory}/>
                </div>
            </div>
        </div>
    );
}
