import { createClient } from '@/utils/supabase/server';
import '../../app/post/[id]/styles.module.css';
import PostHtmlContent from '@/components/post/PostHtmlContent'
// 클라이언트에서만 렌더링할 컴포넌트를 동적으로 임포트

export default async function Notes(props: any) {
  const supabase = createClient();
  const { data: notes } = await supabase.from('posts').select().eq('uuid', props.id).single();
  const supaArray = JSON.parse(JSON.stringify(notes));
  // console.log(supaArray);
  return (
    <div className=' p-10 '>

      {/* 서버 사이드에서 렌더링되지 않는 클라이언트 전용 콘텐츠 */}
      <div className=''> {supaArray.title}</div>

      {/* 클라이언트에서만 렌더링할 콘텐츠 */}
      <PostHtmlContent content={supaArray.content} />
    </div>
  );
}