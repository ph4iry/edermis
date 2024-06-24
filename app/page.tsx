import LogOrRegister from "@/components/LogOrRegister";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg-blue-500 h-[30vh] w-screen overflow-hidden">
        threejs sample
      </div>
      <main className="flex flex-col justify-start items-center w-screen h-[70vh] py-16 gap-8">
        <div className="text-5xl font-bold">eDermis</div>
        <LogOrRegister />
      </main>
    </>
  );
}
