import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-6xl font-bold">Study Active</h1>
      <p className="py-8 text-xl">Em construção</p>
      <Link href='/dashboard'>
        Ir para Dashboard
      </Link>
    </div>
  );
}
