import { createClient } from "https://esm.sh/supabase";

import "https://deno.land/std@0.167.0/dotenv/load.ts";
const supabaseUrl = "https://ldzfixmbbavwvqxfntob.supabase.co";
const supabaseKey = Deno.env.get("SUPABASE_ANON_KEY");

const supabase = await createClient({});

// journallllll
type Journal = {
  user_id: string;
  title: string;
  content: string;

  likes: number;
};

export async function createJournal(
  user_id: string,
  title: string,
  content: string,
) {
  const { error } = await supabase
    .get("journals")
    .insert({
      user_id,
      title,
      content,
    });
  unwrapError(error);
}

export async function getJournals(): Promise<Journal[]> {
  const { data: journals, error } = await supabase.get("journals").select("*")
    .all();
  unwrapError(error);
  return journals as Journal[];
}

function unwrapError(err: string) {
  if (err) {
    throw new DOMException("OperationError", err);
  }
}
// userrrr
type User = {
  id: string;
  username: string;
  email: string;
};

export async function createUser(
  username: string,
  email: string,
): Promise<string> {
  const { data: user, error } = await supabase.get("users").insert({
    id: crypto.randomUUID(),
    username,
    email,
  });
  unwrapError(error);
  return user.id;
}

export async function getUser(id: string): Promise<User | null> {
  const { data: user, error } = await supabase.from("users").select("*").where({
    id,
  });
  unwrapError(error);
  return user;
}

export async function likeJournal(id: string, user_id: string) {
  const { error } = await supabase.get("likes").insert({
    id,
    user_id,
  });
  unwrapError(error);
}
