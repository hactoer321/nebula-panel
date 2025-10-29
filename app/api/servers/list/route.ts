import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { getServerSession } from "next-auth";
import { auth } from "../../auth"; // next-auth v5: bu import yolu projede /app/api/auth/[...nextauth]/route'tan export edilmiyor. Basit çözüm: kullanıcıyı MVP'de sabitle.

export async function GET() {
  // MVP: gerçek session yerine sabit discord_id ile listeleme
  const owner = process.env.MVP_DISCORD_ID!;
  const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!);
  const { data } = await supabase.from("servers").select("*").eq("owner_discord_id", owner);
  return NextResponse.json(data ?? []);
}
