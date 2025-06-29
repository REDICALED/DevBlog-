export const runtime = 'nodejs';
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
import { NextResponse } from 'next/server';
import supabaseClient from '@/utils/supabase/CsrClient';

export async function GET(req: Request): Promise<NextResponse> {
  try {
    let allNotes: any[] = []; // 모든 게시물 저장
    let offset = 0;
    const limit = 200;

    while (true) {
      const { data: notes, error } = await supabaseClient
        .from('posts')
        .select()
        .range(offset, offset + limit - 1) // 200개씩 가져오기
        .order('date', { ascending: false });

      if (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
      }

      if (!notes || notes.length === 0) {
        break; // 더 이상 데이터가 없으면 종료
      }

      allNotes = allNotes.concat(notes); // 가져온 데이터를 모두 합침
      offset += limit; // 다음 200개를 가져오기 위해 offset 증가
    }
    return NextResponse.json({ notes: allNotes }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}
