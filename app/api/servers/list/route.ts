import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
export async function GET() {
  const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!);
  // TODO: gerçek kullanıcı discord_id'yi session'dan al
  // MVP: test için örnek owner_discord_id sabit
  const owner = "DISCORD_ID_MVP";
  const { data } = await supabase.from("servers").select("*").eq("owner_discord_id", owner);
  return NextResponse.json(data ?? []);
}
