"use client";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [servers, setServers] = useState<any[]>([]);
  useEffect(() => {
    fetch("/api/servers/list").then(r=>r.json()).then(setServers);
  }, []);
  return (
    <main style={{padding:20}}>
      <h1>Sunucularım</h1>
      <ul>
        {servers.map(s=>(
          <li key={s.id}>{s.host} — {s.plan} — {s.ram_gb}GB — {s.status}</li>
        ))}
      </ul>
    </main>
  );
}
