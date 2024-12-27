import { create } from "zustand";
import GetAllData from "@/utils/supabase/GetAllData";

interface State {
  supabaseData: any[];
  setSupabaseData: (data: any[]) => void;
}

const useStore = create<State>((set) => ({
  supabaseData: [],
  setSupabaseData: (data) => set({ supabaseData: data }),
}));

export const initializeStore = async () => {
  const data = await GetAllData();
  const zustandStore = useStore.getState();
  if (data !== null) {
    zustandStore.setSupabaseData(data);
  }
};

export default useStore;
