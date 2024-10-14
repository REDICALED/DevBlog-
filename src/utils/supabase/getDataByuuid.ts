import { createClient } from '@/utils/supabase/server';

export default async function getDataByuuid(uuid: string) {
  const supabase = createClient();
  const { data: notes } = await supabase.from('posts').select().eq('id', uuid).single();
  return (notes);
}