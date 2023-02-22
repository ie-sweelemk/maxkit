import { supabase } from "shared/api";
import { CreateUser } from "./types";

export const signUp = async (user: CreateUser) => {
  return await supabase.auth.signUp(
    {
      email: user.email,
      password: user.password,
    }
  );
};

export const signIn = async (user: CreateUser) => {
  return await supabase.auth.signInWithPassword({
    email: user.email,
    password: user.password,
  });
};