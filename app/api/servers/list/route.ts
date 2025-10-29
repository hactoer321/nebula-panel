import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function GET() {
  const owner = process.env.MVP_DISCORD_ID!; // şimdilik sabit
  const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!);
  const { data } = await supabase.from("servers").select("*").eq("owner_discord_id", owner);
  return NextResponse.json(data ?? []);
}
