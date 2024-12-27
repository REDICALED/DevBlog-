import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { cookies } from 'next/headers';

let cachedClient: ReturnType<typeof createServerClient> | null = null;

export function createClient() {
  if (cachedClient) {
    console.log("return cached");
    return cachedClient;
  }
  console.log("return new client");

  const cookieStore = cookies();

  // 첫 호출 시 클라이언트 생성 후 캐시에 저장
  cachedClient = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value, ...options });
          } catch (error) {
            // 오류 처리
          }
        },
        remove(name: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value: '', ...options });
          } catch (error) {
            // 오류 처리
          }
        },
      },
    },
  );

  return cachedClient;
}
