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

  export async function generateStaticParams() {
    const supabaseClient = createClient();
    const { data: posts } = await supabaseClient
      .from('posts')
      .select('uuid');
      
    return posts?.map((post: any) => ({
      id: post.uuid,
    }));
  }



export default async function Post({params}: Props) {
    const supabaseClient = createClient();
    const { data: notes, error } = await supabaseClient
        .from('posts')
        .select()
        .order('date', { ascending: false })
        .eq('uuid', params.id);

    const SupaArray = await JSON.parse(JSON.stringify(notes));
    // 공지를 맨 앞으로 이동
    var PrevSupaArray;
    var NextSupaArray;
    return (
        <div className=''>
          <Postmain id={params.id} SupaArray={SupaArray[0]} PrevSupaArray={PrevSupaArray} NextSupaArray={NextSupaArray} />
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
