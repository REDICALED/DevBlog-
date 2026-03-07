//post/[id]/page.tsx 파일 -> post 별 상세 게시물 페이지 page 컴포넌트

type Props = {
  params: {
    id: string;
  };
};

import './globals.css';
import { createClient } from '@/utils/supabase/server';
import dynamic from 'next/dynamic';
import { unstable_cache } from 'next/cache';

const Postmain = dynamic(() => import('@/components/post/Postmain'), {
  ssr: false
});

export async function generateStaticParams() {
  const supabaseClient = createClient();
  const { data: posts } = await supabaseClient
    .from('posts')
    .select('uuid');

  return posts?.map((post: any) => ({
    id: post.uuid,
  }));
}

function getPostCached(id: string) {
  return unstable_cache(
    async () => {
      const supabaseClient = createClient();

      const { data, error } = await supabaseClient
        .from('posts')
        .select()
        .eq('uuid', id)
        .single();

      if (error) {
        throw new Error(error.message);
      }

      return JSON.parse(JSON.stringify(data));
    },
    ['post-detail', id],
    {
      tags: ['posts', `post:${id}`],
    }
  )();
}

export async function generateMetadata({ params }: Props) {
  const data = await getPostCached(params.id);

  const description =
    data?.content?.replace(/<[^>]*>/g, '').slice(0, 150) ?? '';

  return {
    title: data?.title,
    description,
    openGraph: {
      title: data?.title,
      description,
      images: data?.titleimage ? [data.titleimage] : [],
    },
  };
}

export default async function Post({ params }: Props) {
  const post = await getPostCached(params.id);

  return (
    <div className=''>
      <Postmain id={params.id} SupaArray={post} />
    </div>
  );
}