import { create } from "zustand";
import { signIn, signUp, signOut, getUser } from "../lib/supabase/auth";
import type { AuthState } from "../Types";

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: true,

  // Called once on app start to restore session
  fetchUser: async () => {
    set({ loading: true });
    const { data } = await getUser();
    set({
      user: data.user
        ? { id: data.user.id, email: data.user.email! }
        : null,
      loading: false,
    });
  },

  signIn: async (email, password) => {
    const { data, error } = await signIn(email, password);
    if (error) throw error;
    if (data.user) {
      set({ user: { id: data.user.id, email: data.user.email! } });
    }
  },

  signUp: async (email, password) => {
    const { data, error } = await signUp(email, password);
    if (error) throw error;
    if (data.user) {
      set({ user: { id: data.user.id, email: data.user.email! } });
    }
  },

  signOut: async () => {
    await signOut();
    set({ user: null });
  },
}));