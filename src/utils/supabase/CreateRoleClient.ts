import { createClient  } from "@supabase/supabase-js";
import type { SupabaseClient } from "@supabase/supabase-js";

const supabaseClient:SupabaseClient = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!,process.env.SUPABASE_ROLE_KEY!);

export default supabaseClient;