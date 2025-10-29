"use client";
import { useEffect, useState } from "react";
export default function Dashboard() {
  const [rows, setRows] = useState<any[]>([]);
  useEffect(() => { fetch("/api/servers/list").then(r=>r.json()).then(setRows); }, []);
  return (
    <main style={{padding:20}}>
      <h1>Sunucularım</h1>
      <ul>{rows.map(s=>(<li key={s.id}>{s.host} — {s.plan} — {s.ram_gb}GB — {s.status}</li>))}</ul>
    </main>
  );
}
