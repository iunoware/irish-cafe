import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <img src="/images/b-text.png" alt="" />
      <h1 className="text-4xl">Irish Cafe</h1>
    </div>
  );
}
