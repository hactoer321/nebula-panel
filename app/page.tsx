import Link from "next/link";
export default function Home() {
  return (
    <main style={{padding:20}}>
      <h1>Nebula Panel</h1>
      <Link href="/api/auth/signin">Discord ile giriş</Link>
      <p style={{marginTop:12}}><a href="/dashboard">Dashboard</a></p>
    </main>
  );
}
