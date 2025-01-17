import { NextResponse } from 'next/server';
import {createClient} from '@/utils/supabase/server'

export async function GET(req: Request) {
  try {
    const supabaseClient = createClient();
    const { data: notes, error } = await supabaseClient
    .from('posts')
    .select()
    .order('date', { ascending: false })

    // Upload the file to Supabase Storage

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ notes }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}
