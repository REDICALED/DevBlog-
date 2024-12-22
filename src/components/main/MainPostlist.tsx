'use client';

import supabaseClient from '@/utils/supabase/CreateClient';
import MainMasonry from '@/components/main/MainMasonry';



export default async function Notes() {
  const { data: notes } = await supabaseClient.from('posts').select().order('date', { ascending: false });
  const supaArray = JSON.parse(JSON.stringify(notes));

  return <div>
    <MainMasonry supaArray={supaArray}/>
  </div>;
}