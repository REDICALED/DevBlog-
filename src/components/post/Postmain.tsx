import { createClient } from '@/utils/supabase/server';
import dynamic from 'next/dynamic';
import '../../app/post/[id]/styles.module.css';

// 클라이언트에서만 렌더링할 컴포넌트를 동적으로 임포트
const ClientOnlyContent = dynamic(() => import('./DynamicComponent'), { ssr: false });

export default async function Notes(props: any) {
  const supabase = createClient();
  const { data: notes } = await supabase.from('posts').select().eq('uuid', props.id).single();
  const supaArray = JSON.parse(JSON.stringify(notes));
  // console.log(supaArray);
  return (
    <div className=' p-10 cursor-none'>

      {/* 서버 사이드에서 렌더링되지 않는 클라이언트 전용 콘텐츠 */}
      <div className=''> {supaArray.title}</div>

      {/* 클라이언트에서만 렌더링할 콘텐츠 */}
      <ClientOnlyContent content={supaArray.content} />
    </div>
  );
}