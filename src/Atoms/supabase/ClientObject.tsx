import { atom } from 'recoil';
import { SupabaseClient } from '@supabase/supabase-js';

export const ClientObjectState = atom<SupabaseClient | null>({
  key: 'ClientObjectState',
  default: null,
});
