import ActionBar from "@/components/ActionBar";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-amber-700/20">
      <div className="p-8 pb-4">
        <span className="block text-5xl font-bold">Hi Phaedra!</span>
        <span className="block text-xl text-zinc-400 mt-2">Let&apos;s take care of your skin</span>
      </div>
      <div className="rounded-t-[10vw] bg-white w-screen h-full p-8 space-y-6">
        <div>
          <h1 className="text-zinc-400 text-2xl">Quick Actions</h1>
          <div className="flex overflow-x-scroll flex-nowrap h-20 gap-4 rounded-md p-2 bg-zinc-200/50">
            <button className="px-3 py-0.5 text-xl bg-sky-300/70 whitespace-nowrap rounded-md">Scan your skin</button>
            <button className="px-3 py-0.5 text-xl bg-sky-300/70 whitespace-nowrap rounded-md">Connect with doctors</button>
            <button className="px-3 py-0.5 text-xl bg-sky-300/70 whitespace-nowrap rounded-md">Drug Explanations</button>
          </div>
        </div>
        <div>
          <h1 className="text-zinc-400 text-2xl">For you</h1>
          <div className="italic text-lg mb-3">From your identified problems: <span className="font-bold">Acne</span></div>
          <div className="flex flex-nowrap gap-4 overflow-x-scroll">
            <div className="h-52 min-w-48 rounded-md bg-violet-400/30">tip</div>
            <div className="h-52 min-w-48 rounded-md bg-blue-400/30">tip</div>
            <div className="h-52 min-w-48 rounded-md bg-amber-400/30">tip</div>
            <div className="h-52 min-w-48 rounded-md bg-emerald-400/30">tip</div>
          </div>
        </div>
      </div>
      <ActionBar />
    </div>
  )
}