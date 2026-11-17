"use client";

import Link from "next/link";

const places = [
  {
    n: "01", title: "The Open Window", tag: "PRESENCE",
    copy: "Like opening a window in a home, this digital space offers room to pause, notice and arrive without pressure.",
    image: "presence",
    href: "/experience"
  },
  {
    n: "02", title: "The Shared Table", tag: "MANY VOICES",
    copy: "Like gathering around a shared table, this digital space makes room for different perspectives without one voice owning the story.",
    image: "dialogue",
    href: "/experience"
  },
  {
    n: "03", title: "The Personal Room", tag: "YOUR SPACE",
    copy: "Like a room of one’s own, this private digital space is for gathering thoughts, questions and reflections.",
    image: "personal",
    href: "/experience"
  },
  {
    n: "04", title: "The Connecting Path", tag: "CONNECTION",
    copy: "Like the passages that connect rooms in a home, this digital function helps carry context between moments and conversations.",
    image: "continuity",
    href: "/experience"
  }
];

const principles = [
  ["Choice", "You remain the author of your own experience."],
  ["Many voices", "Different perspectives can sit beside one another."],
  ["Transparency", "Clear about what is real, what is a concept, and what is not connected."],
  ["Human dignity", "A person is more than a diagnosis, a moment or a problem to solve."]
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f0eee8] text-[#26332f] selection:bg-[#c5b89c] selection:text-[#26332f]">
      <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 py-6 text-white md:px-12">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-full border border-white/50 text-lg font-light">S</span>
          <span className="text-xs uppercase tracking-[0.24em]">Soteria <span className="text-white/60">Dialogue</span></span>
        </Link>
        <nav className="hidden items-center gap-8 text-xs tracking-wide md:flex">
          <a href="#concept" className="text-white/80 transition hover:text-white">The concept</a>
          <a href="#houses" className="text-white/80 transition hover:text-white">Explore the houses</a>
          <a href="/tutorial" className="text-white/80 transition hover:text-white">The tutorial</a>
        </nav>
        <Link href="/experience" className="rounded-full border border-white/60 px-5 py-2.5 text-xs transition hover:bg-white hover:text-[#26332f]">Enter the experience ↗</Link>
      </header>

      <section className="relative flex min-h-[88svh] items-end overflow-hidden bg-[#d8e0d7] px-6 pb-16 pt-36 text-white md:min-h-[94svh] md:px-16 md:pb-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2200&q=90')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#17372e]/80 via-[#244b3d]/55 to-[#244b3d]/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#17372e]/55 via-transparent to-[#17372e]/10" />
        <div className="absolute right-[7%] top-[20%] hidden w-[34%] max-w-[440px] rounded-2xl border border-white/60 bg-[#f7f6f0]/95 p-4 text-[#31443b] shadow-2xl backdrop-blur md:block">
          <div className="flex items-center justify-between border-b border-[#d8ddd5] pb-3"><span className="text-[9px] uppercase tracking-[0.22em]">Soteria · Your digital space</span><span className="size-2 rounded-full bg-[#8da98d]"/></div>
          <div className="grid grid-cols-[74px_1fr] gap-3 pt-4">
            <div className="space-y-2"><div className="h-7 rounded-lg bg-[#dfe8df]"/><div className="h-7 rounded-lg bg-[#e9e7dc]"/><div className="h-7 rounded-lg bg-[#e9e7dc]"/></div>
            <div><p className="text-[10px] text-[#8b927f]">A space to arrive</p><p className="mt-1 text-lg font-light">Welcome. Take your time.</p><div className="mt-3 flex gap-2"><div className="h-14 flex-1 rounded-lg bg-[#e3ebe2]"/><div className="h-14 flex-1 rounded-lg bg-[#eee9df]"/></div><div className="mt-3 h-2 w-3/4 rounded bg-[#dce2d9]"/></div>
          </div>
          <div className="mt-4 flex items-center justify-between border-t border-[#d8ddd5] pt-3 text-[8px] tracking-wide text-[#77857a]"><span>PRESENCE · DIALOGUE · CHOICE</span><span>01 / 04</span></div>
        </div>
        <div className="relative z-10 max-w-4xl">
          <p className="mb-7 text-[10px] uppercase tracking-[0.35em] text-[#e2d7c2]">A digital place for being together</p>
          <h1 className="max-w-4xl text-5xl font-light leading-[1.05] tracking-[-0.04em] md:text-7xl lg:text-[5.8rem]">
            Not here to fix you.<br /><span className="font-serif italic text-[#e4d8c1]">Here to be with you.</span>
          </h1>
          <div className="mt-9 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <p className="max-w-md text-sm leading-7 text-white/85 md:text-base">
              A human-centred digital platform, organised like a home: connected spaces for presence, reflection, dialogue and continuity.
            </p>
            <a href="#concept" className="inline-flex w-fit items-center gap-4 border-b border-white/50 pb-2 text-xs tracking-wide">Discover the idea <span className="text-lg">↓</span></a>
          </div>
        </div>
        <div className="absolute bottom-8 right-8 hidden text-[9px] uppercase tracking-[0.28em] text-white/70 md:block">A connected digital environment</div>
      </section>
      <section id="concept" className="grid gap-12 px-6 py-24 md:grid-cols-[0.8fr_1.2fr] md:px-16 md:py-32">
        <div>
          <p className="text-[10px] uppercase tracking-[0.28em] text-[#8b806c]">01 / The idea</p>
          <h2 className="mt-6 max-w-sm text-4xl font-light leading-tight tracking-tight md:text-5xl">A digital home built around the person, <span className="font-serif italic text-[#8b806c]">not the system.</span></h2>
        </div>
        <div className="flex flex-col justify-end gap-8">
          <p className="max-w-2xl text-xl font-light leading-relaxed text-[#52615a] md:text-2xl">
            The house is our guiding analogy. Its foundation is a set of values; its rooms are digital spaces with different purposes; its doors leave people free to choose where to go.
          </p>
          <div className="grid grid-cols-2 gap-6 border-t border-[#c9c5ba] pt-6 md:grid-cols-4">
            {["Presence", "Dialogue", "Autonomy", "Continuity"].map((item, i) => <div key={item}><span className="text-[10px] text-[#a69a84]">0{i+1}</span><p className="mt-2 text-sm">{item}</p></div>)}
          </div>
        </div>
      </section>

      <section id="houses" className="bg-[#e5e2d9] px-6 py-24 md:px-16 md:py-28">
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div><p className="text-[10px] uppercase tracking-[0.28em] text-[#8b806c]">02 / Understand the digital house</p><h2 className="mt-5 text-4xl font-light tracking-tight md:text-5xl">One digital home.<br />Different spaces for <span className="font-serif italic text-[#8b806c]">being with.</span></h2></div>
          <p className="max-w-xs text-sm leading-6 text-[#68736d]">The house is a metaphor for how the platform is organised. These are digital functions and experiences—not physical houses or locations.</p>
        </div>
        <div className="mb-10 grid gap-5 border-y border-[#c9c5ba] py-6 md:grid-cols-4">
          <div><p className="text-[9px] uppercase tracking-[0.22em] text-[#8b806c]">The foundation</p><p className="mt-2 text-sm">Principles and values</p></div>
          <div><p className="text-[9px] uppercase tracking-[0.22em] text-[#8b806c]">The entrance</p><p className="mt-2 text-sm">Arrival, orientation and choice</p></div>
          <div><p className="text-[9px] uppercase tracking-[0.22em] text-[#8b806c]">The rooms</p><p className="mt-2 text-sm">Digital spaces with distinct purposes</p></div>
          <div><p className="text-[9px] uppercase tracking-[0.22em] text-[#8b806c]">The pathways</p><p className="mt-2 text-sm">Continuity between experiences</p></div>
        </div>
        <p className="mb-8 max-w-2xl text-xs leading-6 text-[#68736d]">When we say “house”, we mean a digital architecture: a way to organise experiences so that each has a purpose, while the person remains free to move, pause or leave. No physical building is being described.</p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {places.map((place) => <Link href={place.href} key={place.n} className="group block">
            <div className="relative mb-5 flex aspect-[4/5] flex-col overflow-hidden border border-[#d0d3c9] bg-gradient-to-br from-[#f8f7f1] via-[#e9eee7] to-[#d7e2d8] p-4 text-[#34483f] shadow-sm transition duration-700 group-hover:-translate-y-1">
              <div className="flex items-center justify-between border-b border-[#bfcbbf] pb-3"><span className="text-[8px] uppercase tracking-[0.2em]">Soteria / {place.tag}</span><span className="size-2 rounded-full bg-[#8ca78d]"/></div>
              {place.image === "presence" && <><div className="mt-5 text-[9px] text-[#829087]">A MOMENT TO ARRIVE</div><div className="mt-2 text-2xl font-light">Welcome.</div><div className="my-5 grid flex-1 place-items-center"><div className="grid size-28 place-items-center rounded-full border border-[#a9bba9] bg-white/50"><div className="grid size-20 place-items-center rounded-full border border-[#b9c9b8] bg-[#e5eee4]"><span className="text-[9px] tracking-widest">PAUSE</span></div></div></div><div className="rounded-lg bg-white/75 p-3 text-[9px]">You can begin wherever you are.</div></>}
              {place.image === "dialogue" && <><div className="mt-5 text-[9px] text-[#829087]">A SHARED CONVERSATION</div><div className="mt-2 text-xl font-light">Many voices.</div><div className="mt-5 flex-1 space-y-3"><div className="w-[82%] rounded-xl rounded-tl-sm bg-white p-3 text-[9px] shadow-sm">I see it a little differently…</div><div className="ml-auto w-[82%] rounded-xl rounded-tr-sm bg-[#d4e2d3] p-3 text-[9px]">There is room for both views.</div><div className="w-[70%] rounded-xl rounded-tl-sm bg-white p-3 text-[9px] shadow-sm">Tell me more.</div></div><div className="rounded-full border border-[#bdc9bd] bg-white/70 px-3 py-2 text-[8px] text-[#879187]">Write a thought…</div></>}
              {place.image === "personal" && <><div className="mt-5 text-[9px] text-[#829087]">YOUR PRIVATE SPACE</div><div className="mt-2 text-xl font-light">A page of your own.</div><div className="mt-5 flex-1 rounded-xl border border-[#d4d9ce] bg-white/75 p-4 shadow-sm"><div className="mb-4 h-2 w-1/3 rounded bg-[#d7e1d6]"/><div className="space-y-2"><div className="h-1.5 w-full rounded bg-[#e6e8df]"/><div className="h-1.5 w-5/6 rounded bg-[#e6e8df]"/><div className="h-1.5 w-4/6 rounded bg-[#e6e8df]"/></div><div className="mt-8 h-16 rounded-lg bg-[#f0eee5]"/></div><div className="mt-3 text-[8px]">Reflect · Save · Return</div></>}
              {place.image === "continuity" && <><div className="mt-5 text-[9px] text-[#829087]">CONNECTED EXPERIENCES</div><div className="mt-2 text-xl font-light">A path between moments.</div><div className="relative mt-5 flex flex-1 items-center justify-center"><div className="absolute h-[1px] w-[75%] bg-[#9eb49f]"/><div className="flex w-full items-center justify-between"><div className="grid size-12 place-items-center rounded-xl border border-[#b9c9b8] bg-white text-[8px] shadow-sm">ARRIVE</div><div className="grid size-12 place-items-center rounded-xl border border-[#b9c9b8] bg-white text-[8px] shadow-sm">DIALOGUE</div><div className="grid size-12 place-items-center rounded-xl border border-[#b9c9b8] bg-white text-[8px] shadow-sm">RETURN</div></div></div><div className="rounded-lg bg-white/75 p-3 text-[9px]">Your journey, at your pace.</div></>}
              <div className="mt-4 flex items-center justify-between border-t border-[#bfcbbf] pt-3 text-[8px] tracking-widest text-[#718176]"><span>{place.tag}</span><span>{place.n} / 04</span></div>
            </div>
            <div className="flex items-start justify-between gap-3"><div><h3 className="text-xl font-light">{place.title}</h3><p className="mt-2 text-xs leading-6 text-[#68736d]">{place.copy}</p></div><span className="mt-1 text-lg transition-transform group-hover:translate-x-1">↗</span></div>
          </Link>)}
        </div>
      </section>

      <section id="guide" className="grid gap-12 px-6 py-24 md:grid-cols-2 md:px-16 md:py-32">
        <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#dce7dc] via-[#edf0e8] to-[#d4e0dc] p-6">
          <div className="w-full max-w-lg rounded-2xl border border-white bg-[#fafaf6]/95 p-5 text-[#34483f] shadow-xl">
            <div className="flex items-center justify-between border-b border-[#d9ded5] pb-3"><span className="text-[9px] uppercase tracking-[0.2em]">Soteria Dialogue · Guided tour</span><span className="size-2 rounded-full bg-[#8ca78d]"/></div>
            <p className="mt-5 text-2xl font-light">Explore the digital house.</p><p className="mt-1 text-[10px] text-[#879187]">A connected platform. Spaces with different purposes.</p>
            <div className="mt-5 grid grid-cols-2 gap-3"><div className="rounded-xl bg-[#e7eee5] p-4"><div className="mb-5 size-8 rounded-full border border-[#a9bba9]"/><p className="text-xs">Presence</p><p className="mt-1 text-[9px] text-[#879187]">Arrive and pause</p></div><div className="rounded-xl bg-[#f0ece1] p-4"><div className="mb-5 flex gap-1"><span className="h-3 w-8 rounded-full bg-white"/><span className="h-3 w-8 rounded-full bg-[#d4dfd3]"/></div><p className="text-xs">Dialogue</p><p className="mt-1 text-[9px] text-[#879187]">Meet perspectives</p></div><div className="rounded-xl bg-[#f0ece1] p-4"><div className="mb-5 h-7 w-9 rounded border border-[#c8cbbb] bg-white"/><p className="text-xs">Personal room</p><p className="mt-1 text-[9px] text-[#879187]">Reflect privately</p></div><div className="rounded-xl bg-[#e7eee5] p-4"><div className="mb-5 flex items-center gap-1"><span className="size-3 rounded-full bg-[#9bb39b]"/><span className="h-px w-5 bg-[#9bb39b]"/><span className="size-3 rounded-full bg-[#9bb39b]"/></div><p className="text-xs">Continuity</p><p className="mt-1 text-[9px] text-[#879187]">Carry context forward</p></div></div>
            <div className="mt-5 flex items-center justify-between border-t border-[#d9ded5] pt-3 text-[8px] tracking-wide text-[#879187]"><span>YOUR SPACE · YOUR CHOICE</span><span>01 — 04</span></div>
          </div>
          <div className="absolute bottom-5 left-8 text-[9px] uppercase tracking-[0.25em] text-[#687b6e]">A platform designed around people</div>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-[10px] uppercase tracking-[0.28em] text-[#8b806c]">03 / A guided tour</p>
          <h2 className="mt-6 text-4xl font-light leading-tight md:text-5xl">See how the pieces <span className="font-serif italic text-[#8b806c]">fit together.</span></h2>
          <p className="mt-6 max-w-md text-sm leading-7 text-[#68736d]">A short visual guide to the house analogy: how its foundation, entrance, rooms and connecting paths translate into digital functions. No long manual. Explore at your own pace.</p>
          <div className="mt-9 space-y-4 border-t border-[#c9c5ba] pt-6">
            {["Begin with the person", "Explore the houses", "Discover dialogue and continuity"].map((v,i)=><div className="flex items-center gap-4" key={v}><span className="grid size-8 place-items-center rounded-full border border-[#bcb6a8] text-[10px]">0{i+1}</span><span className="text-sm">{v}</span></div>)}
          </div>
          <Link href="/tutorial" className="mt-9 inline-flex w-fit items-center gap-5 rounded-full bg-[#34483f] px-7 py-4 text-xs text-white transition hover:bg-[#26372f]">Start the guided exploration <span>↗</span></Link>
        </div>
      </section>

      <section className="bg-[#34483f] px-6 py-24 text-[#f0eee8] md:px-16 md:py-28">
        <div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr]">
          <div><p className="text-[10px] uppercase tracking-[0.28em] text-[#c7bda8]">04 / What guides us</p><h2 className="mt-6 text-4xl font-light leading-tight md:text-5xl">The principles<br /><span className="font-serif italic text-[#d8cbb3]">beneath the design.</span></h2></div>
          <div className="grid gap-0 sm:grid-cols-2">
            {principles.map(([title,copy],i)=><div key={title} className="border-t border-white/20 py-6 sm:px-6"><span className="text-[10px] text-[#c7bda8]">0{i+1}</span><h3 className="mt-3 text-xl font-light">{title}</h3><p className="mt-2 max-w-xs text-xs leading-6 text-white/60">{copy}</p></div>)}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-6 py-28 text-center md:px-16 md:py-36">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=2000&q=85')] bg-cover bg-center opacity-35" />
        <div className="absolute inset-0 bg-[#f0eee8]/75" />
        <div className="relative mx-auto max-w-2xl">
          <p className="text-[10px] uppercase tracking-[0.28em] text-[#8b806c]">A place to begin</p>
          <h2 className="mt-6 text-5xl font-light leading-tight tracking-tight md:text-6xl">Come as you are.<br /><span className="font-serif italic text-[#8b806c]">Explore at your pace.</span></h2>
          <p className="mx-auto mt-6 max-w-md text-sm leading-7 text-[#68736d]">Step inside the current concept experience and discover what is being explored.</p>
          <Link href="/experience" className="mt-9 inline-flex rounded-full bg-[#34483f] px-8 py-4 text-xs text-white transition hover:bg-[#26372f]">Enter Soteria Dialogue ↗</Link>
        </div>
      </section>

      <footer className="flex flex-col gap-5 border-t border-[#d3d0c7] px-6 py-8 text-[10px] text-[#7b817a] md:flex-row md:items-center md:justify-between md:px-16">
        <span className="uppercase tracking-[0.2em]">Soteria Dialogue · Being With</span>
        <span>Adults 18+ · A developing concept and interactive prototype</span>
        <a href="#top" className="hover:text-[#34483f]">Back to top ↑</a>
      </footer>
    </main>
  );
}
