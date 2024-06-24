import LogOrRegister from "@/components/LogOrRegister";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-br from-sky-400 to-violet-400 h-[25vh] w-screen overflow-hidden">
        
      </div>
      <main className="flex flex-col justify-start items-center w-screen h-[70vh] pt-20 gap-8">
        <div className="text-5xl font-bold playfair">eDermis</div>
        <LogOrRegister />
      </main>
    </>
  );
}
