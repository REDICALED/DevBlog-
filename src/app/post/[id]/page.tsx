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
    const { data: notes } = await supabaseClient.from('posts').select().order('date', { ascending: false });
    const supaArray = await JSON.parse(JSON.stringify(notes));
    var SupaArray;
    var PrevSupaArray;
    var NextSupaArray;
    for (let i = 0; i < supaArray.length; i++) {
        if (supaArray[i].uuid === params.id) {
            SupaArray = supaArray[i];
            if (i > 0) {
              PrevSupaArray = supaArray[i-1];
            }
            if (i < SupaArray.length-1) {
              NextSupaArray = supaArray[i+1];}
        }
    }
    return (
        <div className=''>
          <Postmain id={params.id} SupaArray={SupaArray} PrevSupaArray={PrevSupaArray} NextSupaArray={NextSupaArray} />
        </div>
    );
}
