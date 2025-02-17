import { NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';

export const runtime = 'edge';

export async function POST(req: Request): Promise<NextResponse> {
    const { tag } = await req.json();
      revalidateTag(tag);
      console.log(tag)
      return NextResponse.json({ message: 'revalidate successfully' }, { status: 200 });
}
