import { createClient } from '@/utils/supabase/server';
import '../../app/post/[id]/styles.module.css';
import PostHtmlContent from '@/components/post/PostHtmlContent'
// 클라이언트에서만 렌더링할 컴포넌트를 동적으로 임포트

export default async function Notes(props: any) {
  const supabase = createClient();
  const { data: notes } = await supabase.from('posts').select().eq('uuid', props.id).single();
  const supaArray = JSON.parse(JSON.stringify(notes));
  const formattedDate = new Date(supaArray.date).toISOString().split('T')[0];
  return (
    <div className=' lg:mx-auto w-[100vw] lg:w-[80vw]'>
      <div className=' grid'>
      <div className=' font-semibold text-7xl mb-2 opacity-70'> {supaArray.title}</div>
      <div className='flex mt-2 mb-2 opacity-50'>
      <div className=' ml-1 mr-2 font-semibold text-md'> {formattedDate}</div>
      {
        
        supaArray.tags && supaArray.tags.map((tag: string, index: number) => (
          <div key={index} className=' ml-1 font-semibold text-md '> {"#"+tag}</div>
        ))
      }</div>
      <div style={{ borderColor: 'var(--text-color)'}} className={ " mb-10 lg:w-[80vw] h-5 border-b-4"}></div>

      



      <PostHtmlContent content={supaArray.content} />
      </div>
    </div>
  );
}