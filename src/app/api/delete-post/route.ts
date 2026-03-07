import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { revalidateTag } from 'next/cache';

export async function POST(req: Request) {
  try {
    const { uuid } = await req.json();

    if (!uuid) {
      return NextResponse.json({ error: 'uuid missing' }, { status: 400 });
    }

    // 서버 전용 Supabase Client 직접 생성
    const supabaseClient = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_ROLE_KEY! // 서버 전용 키 사용
    );

    const { data, error } = await supabaseClient
      .from('posts')
      .delete()
      .eq('uuid', uuid);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    revalidateTag('posts');
    return NextResponse.json({ message: 'Post deleted successfully', data });
  } catch (err) {
    if (err instanceof Error) {
      return NextResponse.json({ error: err.message }, { status: 500 });
    }
    return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 });
  }
}
