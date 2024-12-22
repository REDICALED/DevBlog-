import { NextRequest } from 'next/server';
import supabaseClient from '@/utils/supabase/CreateRoleClient';
import { v4 as uuidv4 } from 'uuid';

export async function POST(request: NextRequest) {
  const formData = await request.formData();  // formData로 파일 받기
  const file = formData.get('file') as File;  // 'file' 필드에서 File 객체 추출 (Blob이 아닌 File로)
  const uuid = formData.get('uuid') as string;  // 'uuid' 필드에서 UUID 문자열 추출
  if (!file) {
    return new Response('파일이 없습니다', { status: 400 });
  }

  // Supabase에 파일 업로드
  const { data, error } = await supabaseClient.storage
    .from('images')  // 버킷 이름
    .upload(`images/${uuid}/${file.name}`, file);  // 파일 업로드 (file.name을 사용)

  if (error) {
    console.error(error.message);
    return new Response('파일 업로드 실패', { status: 500 });
  }

  return new Response('파일 업로드 성공', { status: 200 });
}
