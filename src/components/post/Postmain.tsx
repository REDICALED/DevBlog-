import { createClient } from '@/utils/supabase/server';
import { Main } from 'next/document';
import dynamic from'next/dynamic';


export default async function Notes(props: any) {
  const supabase = createClient();
  const { data: notes } = await supabase.from('posts').select().eq('uuid', props.id).single();
  const supaArray = JSON.parse(JSON.stringify(notes));
  console.log(supaArray);
  return <div>
    <div >
      <div dangerouslySetInnerHTML={{ __html: supaArray.title }} />
    </div>
      <div dangerouslySetInnerHTML={{ __html: supaArray.content }} />
    </div>;
}