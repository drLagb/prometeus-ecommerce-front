import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="bg-mainColor h-screen font-bold flex justify-center items-center gap-10">
      Hola
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
