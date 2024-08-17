import { createClient } from '@/utils/supabase/server';
import dynamic from'next/dynamic';

const MainMasonry = dynamic(() =>import('@/components/main/MainMasonry'), {
    ssr: false, // 클라이언트 사이드에서만 렌더링하도록 설정
  });

export default async function Notes() {
  const supabase = createClient();
  const { data: notes } = await supabase.from('posts').select();
  const supaArray = JSON.parse(JSON.stringify(notes));

  return <div>
    <MainMasonry supaArray={supaArray}/>
  </div>;
}