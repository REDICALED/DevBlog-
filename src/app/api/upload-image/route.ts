import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    // Parse the request body
    const formData = await req.formData();
    const path = formData.get('path') as string;
    const file = formData.get('file') as File;

    // Upload the file to Supabase Storage
    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    // Upload the file to Supabase Storage
    const { data, error } = await supabase.storage.from('images').upload(`${path}/${file.name}`, file);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ data }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}
