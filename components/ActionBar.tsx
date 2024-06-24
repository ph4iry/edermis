import { CubeTransparentIcon, HomeIcon, ArrowPathIcon, Square2StackIcon, UserCircleIcon } from "@heroicons/react/24/outline";

export default function ActionBar() {
  return (
    <div className="fixed bottom-[5vh] left-[5vw] h-20 w-[90vw] bg-white shadow-xl rounded-full flex justify-center items-center gap-4 border-2 border-zinc-800">
      <div><HomeIcon className="h-10 text-zinc-800" /></div>
      <div><ArrowPathIcon className="h-10 text-zinc-800" /></div>
      <button className="w-20 h-32 rounded-full relative p-2 bg-zinc-800 flex flex-col justify-center items-center">
        <CubeTransparentIcon className="h-14 text-white mb-1" />
        <span className="text-white font-bold">Scan</span>
      </button>
      <div><Square2StackIcon className="h-10 text-zinc-800" /></div>
      <div><UserCircleIcon className="h-10 text-zinc-800" /></div>
    </div>
  )
}