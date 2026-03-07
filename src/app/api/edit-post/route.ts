import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_ROLE_KEY!
);

export async function POST(req: Request): Promise<NextResponse> {
  try {
    const { uuid, titleimage, title, content, date, tags, category } = await req.json();

    const { data, error } = await supabaseAdmin
      .from('posts')
      .update({
        titleimage,
        title,
        content,
        date,
        tags,
        category,
      })
      .eq('uuid', uuid)
      .select();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: 'Post edited successfully', data });
  } catch (err) {
    if (err instanceof Error) {
      return NextResponse.json({ error: err.message }, { status: 500 });
    }
    return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 });
  }
}