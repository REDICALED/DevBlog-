import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { revalidateTag } from 'next/cache';

export async function POST(req: Request): Promise<NextResponse> {
    try {
      const { uuid, is_display } = await req.json();
      const supabaseClient = createClient(
          process.env.NEXT_PUBLIC_SUPABASE_URL!,
          process.env.SUPABASE_ROLE_KEY! // 서버 전용 키 사용
        );

      const { data, error } = await supabaseClient
        .from('posts')
        .update({ is_display: !is_display })
        .eq('uuid', uuid);
  
      if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
      }
      return NextResponse.json({ message: 'Display post switched successfully', data });
    } catch (err) {
      if (err instanceof Error) {
        return NextResponse.json({ error: err.message }, { status: 500 });
      }
      return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 });
    }
  }

