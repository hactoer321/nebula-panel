import Link from "next/link";

export default function Home() {
  return (
    <main style={{padding:20}}>
      <h1>Nebula Panel</h1>
      <p>Discord ile giriş yap:</p>
      <Link href="/api/auth/signin">Giriş Yap</Link>
      <p style={{marginTop:16}}><a href="/dashboard">Dashboard</a></p>
    </main>
  );
}
