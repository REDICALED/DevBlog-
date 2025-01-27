import { NextResponse } from 'next/server';

export async function POST(req: Request): Promise<NextResponse> {
  const { password } = await req.json(); // 클라이언트에서 보낸 JSON 데이터 받기

  const storedPassword = process.env.PASSWORD;

  if (password === storedPassword) {
    return NextResponse.json({ message: 'Authenticated' }, { status: 200 });
  } else {
    return NextResponse.json({ message: 'Failed to process request' }, { status: 500 });
  }
}