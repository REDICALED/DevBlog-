//post/[id]/page.tsx 파일 -> post 별 상세 게시물 페이지 page 컴포넌트

type Props = {
    params: {
      id: string;
    }
  }


import {createClient} from '@/utils/supabase/server'
import dynamic from 'next/dynamic'
const Postmain = dynamic(() => import('@/components/post/Postmain'), {
    ssr: false
  })

export default async function Post({params}: Props) {
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
    const supaArray = allData.filter((value: any) => {
        if (value.tags.includes('공지')) {
            return true;
        }
        return false;
    });
    const otherPosts = allData.filter((value: any) => !value.tags.includes('공지'));
    const finalArray = [...supaArray, ...otherPosts];
    var SupaArray;
    var PrevSupaArray;
    var NextSupaArray;
    for (let i = 0; i < finalArray.length; i++) {
        if (finalArray[i].uuid === params.id) {
            SupaArray = finalArray[i];
            if (i > 0) {
              NextSupaArray = finalArray[i-1];
            }
            if (i < finalArray.length-1) {
              PrevSupaArray = finalArray[i+1];}
        }
    }
    return (
        <div className=''>
          <Postmain id={params.id} SupaArray={SupaArray} PrevSupaArray={PrevSupaArray} NextSupaArray={NextSupaArray} />
        </div>
    );
}



// //post/[id]/page.tsx 파일 -> post 별 상세 게시물 페이지 page 컴포넌트

// type PropsType = {
//   params: {
//   id: string;
//   current: any;
//   prev: any;
//   next: any;
//   }
// }


// import {createClient} from '@/utils/supabase/server'
// import dynamic from 'next/dynamic'

// type PostType = {
// uuid: string; // 고유 식별자
// title: string; // 게시물 제목
// content: string; // 게시물 내용
// date: string; // ISO 형식의 타임스탬프
// tags: string[]; // 태그 배열
// titleimage: string; // 제목 이미지 URL
// category: string; // 카테고리
// };

// export async function generateStaticParams() {
// const supabaseClient = createClient();
// const { data: notes } = await supabaseClient.from('posts').select().order('date', { ascending: true });

// // 현재 게시물 정보 배열 생성
// const currentPosts = notes.map((post:PostType) => ({
//   id: post.uuid,
//   title: post.title,
//   tags: post.tags,
//   date: post.date,
//   content: post.content,
// }));

// // prev 배열 생성
// const prevArray = notes.map((post:PostType, index: number) => ({
//   uuid: index > 0 ? notes[index - 1].uuid : null,
//   title: index > 0 ? notes[index - 1].title : null,
//   titleimage: index > 0 ? notes[index - 1].titleimage : null,
// }));

// // next 배열 생성
// const nextArray = notes.map((post: PostType, index: number) => ({
//   uuid: index < notes.length - 1 ? notes[index + 1].uuid : null,
//   title: index < notes.length - 1 ? notes[index + 1].title : null,
//   titleimage: index < notes.length - 1 ? notes[index + 1].titleimage : null,
// }));

// // 최종 배열 리턴
// return currentPosts.map((post: { id: string; }, index: number) => ({
//   id: post.id,
//   current: post,
//   prev: prevArray[index],
//   next: nextArray[index],
// }));
// }


// const Postmain = dynamic(() => import('@/components/post/Postmain'), {
//   ssr: false
// })

// export default async function Post({params}: PropsType) {
// const supabaseClient = createClient();
// const { data: notes } = await supabaseClient.from('posts').select().order('date', { ascending: true });

//   console.log(params)
//   console.log("ㅁㄴㅇ러ㅜㅁㄴ아러ㅜ민ㅇ라ㅓㅜ민ㅇ라ㅓㅜㅁㄴ이라ㅓㅜㅁㄴㅇㄹㄹ")
//   return (
//       <div className=''>
//         <Postmain id={params.id} SupaArray={params.current} PrevSupaArray={params.prev} NextSupaArray={params.next} />
//       </div>
//   );
// }
