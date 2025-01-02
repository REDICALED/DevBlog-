import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { cookies } from 'next/headers';

let cachedClient: ReturnType<typeof createServerClient> | null = null;

export function createClient() {
  if (cachedClient) {
    console.log("return cached");
    return cachedClient;
  }
  console.log("return new client");

  // 첫 호출 시 클라이언트 생성 후 캐시에 저장
  cachedClient = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      // 쿠키 관련 옵션도 제거
      cookies: {
        get() {
          return ""; // 빈 값으로 설정
        },
        set() {
          // 쿠키 설정 안함
        },
        remove() {
          // 쿠키 삭제 안함
        },
      },
    },
  );

  return cachedClient;
}
