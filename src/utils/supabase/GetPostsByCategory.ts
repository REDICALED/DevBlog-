import supabaseClient from '@/utils/supabase/CreateClient';

export default async function GetPostsByCategory(props: {category: string}) {
  if (props.category === 'All') {
    const { data: notes } = await supabaseClient.from('posts').select().order('date', { ascending: false });
    return (notes);
  }
  const { data: notes } = await supabaseClient.from('posts').select().eq('category', props.category);
  return (notes);
}