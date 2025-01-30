'use server'

import { NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';
import { revalidateTag } from 'next/cache';

export async function POST(req: Request): Promise<NextResponse> {
    const supabaseClient = createClient();
    try {
      const { uuid, titleimage, title, content, date, tags, category } = await req.json();
  
      const { data, error } = await supabaseClient
        .from('posts')
        .insert([{ uuid, titleimage, title, content, date, tags, category }]);
  
      if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
      }
      revalidateTag('posts')
      console.log('revalvlvlalvlavlav');
      return NextResponse.json({ message: 'Post added successfully', data });
    } catch (err) {
      if (err instanceof Error) {
        return NextResponse.json({ error: err.message }, { status: 500 });
      }
      return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 });
    }
  }

