import Link from "next/link";

export default function Home() {

  return (
    <div>
      <h1 className="text-3xl underline mb-3">HOME PAGE</h1>
      <Link href="/dashboard">Dashboard</Link>
    </div>
  );
}
