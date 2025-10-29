import Link from "next/link";
export default function Home() {
  return (
    <main style={{padding:20}}>
      <h1>Nebula Panel</h1>
      <p>Discord ile giriş:</p>
      <Link href="/api/auth/signin">Giriş Yap</Link>
    </main>
  );
}
