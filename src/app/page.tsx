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

      <section className="relative isolate min-h-[92svh] overflow-hidden bg-[#d9e6dc] px-6 pb-14 pt-32 text-[#263b32] md:px-16 md:pb-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2200&q=90')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f4f1e8]/95 via-[#f4f1e8]/75 to-[#f4f1e8]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#213c31]/35 via-transparent to-white/10" />
        <div className="relative z-10 grid min-h-[68svh] items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div className="max-w-2xl py-10">
            <p className="mb-7 text-[10px] uppercase tracking-[0.32em] text-[#61776a]">A digital place for being together</p>
            <h1 className="text-5xl font-light leading-[1.04] tracking-[-0.045em] text-[#263b32] md:text-7xl lg:text-[5.4rem]">Not here to fix you.<br/><span className="font-serif italic text-[#8b806c]">Here to be with you.</span></h1>
            <p className="mt-8 max-w-lg text-base leading-7 text-[#506258]">Soteria Dialogue is a human-centred digital environment: a connected home for presence, shared dialogue, private reflection and continuity.</p>
            <div className="mt-9 flex flex-wrap items-center gap-4"><Link href="/experience" className="rounded-full bg-[#34483f] px-7 py-4 text-xs text-white shadow-lg transition hover:bg-[#26372f]">Enter the digital house ↗</Link><a href="#houses" className="border-b border-[#718277] pb-2 text-xs text-[#34483f]">Explore its spaces ↓</a></div>
          </div>
          <div className="relative mx-auto w-full max-w-[540px] rounded-[28px] border border-white/80 bg-[#f8f8f2]/95 p-4 shadow-[0_30px_90px_rgba(31,57,44,0.25)] backdrop-blur-xl md:p-5">
            <div className="flex items-center justify-between border-b border-[#dce3da] px-1 pb-4"><div className="flex items-center gap-2"><span className="grid size-8 place-items-center rounded-full bg-[#34483f] text-sm text-white">S</span><div><p className="text-[10px] font-medium tracking-[0.16em]">SOTERIA DIALOGUE</p><p className="mt-0.5 text-[9px] text-[#8b978c]">Your digital home</p></div></div><span className="rounded-full bg-[#e5eee4] px-3 py-1.5 text-[9px] text-[#58715f]">● A space to arrive</span></div>
            <div className="grid grid-cols-[112px_1fr] gap-4 pt-4">
              <div className="space-y-2 text-[9px]"><div className="rounded-xl bg-[#dfe9df] p-3 text-[#34483f]">⌂ &nbsp; Presence</div><div className="rounded-xl bg-white p-3 text-[#7d897f]">◌ &nbsp; Dialogue</div><div className="rounded-xl bg-white p-3 text-[#7d897f]">▤ &nbsp; My room</div><div className="rounded-xl bg-white p-3 text-[#7d897f]">↗ &nbsp; Continuity</div></div>
              <div className="rounded-2xl bg-[#edf1e9] p-4"><p className="text-[9px] uppercase tracking-[0.18em] text-[#829083]">Welcome to your space</p><p className="mt-2 text-2xl font-light text-[#34483f]">Come as you are.</p><p className="mt-1 text-[10px] leading-5 text-[#77857a]">There is no right place to begin. Choose a space, take a pause, or simply look around.</p><div className="mt-4 grid grid-cols-2 gap-2"><div className="rounded-xl bg-white p-3"><span className="text-lg text-[#91a88f]">◯</span><p className="mt-2 text-[10px] text-[#46594d]">Pause & arrive</p></div><div className="rounded-xl bg-[#e2e9df] p-3"><span className="text-lg text-[#91a88f]">⌁</span><p className="mt-2 text-[10px] text-[#46594d]">Meet in dialogue</p></div></div><div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white"><div className="h-full w-2/3 rounded-full bg-[#9eb59d]"/></div></div>
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-[#dce3da] px-1 pt-3 text-[8px] uppercase tracking-[0.16em] text-[#879388]"><span>Presence · Dialogue · Choice</span><span>Connected by design</span></div>
          </div>
        </div>
        <div className="absolute bottom-5 right-8 text-[9px] uppercase tracking-[0.25em] text-white drop-shadow">A connected digital environment</div>
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
            <div className="relative mb-5 flex aspect-[4/5] flex-col overflow-hidden rounded-2xl border border-[#d5d9cf] bg-[#f8f8f2] p-4 text-[#34483f] shadow-[0_12px_35px_rgba(50,66,53,0.07)] transition duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_20px_45px_rgba(50,66,53,0.13)]">
              <div className="flex items-center justify-between border-b border-[#e1e4dc] pb-3"><div className="flex items-center gap-2"><span className="grid size-6 place-items-center rounded-full bg-[#34483f] text-[9px] text-white">S</span><span className="text-[8px] uppercase tracking-[0.17em]">Soteria / {place.tag}</span></div><span className="size-2 rounded-full bg-[#8ca78d]"/></div>
              {place.image === "presence" && <><div className="mt-5 flex items-center justify-between"><span className="text-[9px] uppercase tracking-[0.15em] text-[#89958a]">Your arrival</span><span className="text-[9px] text-[#9ba69b]">01 / 04</span></div><p className="mt-3 text-2xl font-light">Welcome.</p><p className="mt-1 text-[10px] text-[#879187]">Take a moment. There is no rush.</p><div className="my-5 flex flex-1 items-center justify-center rounded-2xl bg-gradient-to-br from-[#e4eee2] to-[#f2eee4]"><div className="grid size-28 place-items-center rounded-full border border-[#a9bba9] bg-white/60 shadow-inner"><div className="grid size-20 place-items-center rounded-full border border-[#b9c9b8] bg-[#e5eee4] text-[9px] tracking-widest">PAUSE</div></div></div><div className="rounded-xl bg-[#e7eee5] px-3 py-3 text-[9px]">Begin wherever you are <span className="float-right">↗</span></div></>}
              {place.image === "dialogue" && <><div className="mt-5 flex items-center justify-between"><span className="text-[9px] uppercase tracking-[0.15em] text-[#89958a]">A shared conversation</span><span className="text-[9px] text-[#9ba69b]">02 / 04</span></div><p className="mt-3 text-2xl font-light">Many voices.</p><p className="mt-1 text-[10px] text-[#879187]">A place for perspectives to meet.</p><div className="mt-5 flex-1 space-y-3 rounded-2xl bg-[#f0f2eb] p-3"><div className="flex items-start gap-2"><span className="grid size-6 place-items-center rounded-full bg-[#d5e1d3] text-[8px]">A</span><div className="rounded-xl rounded-tl-sm bg-white p-3 text-[9px] shadow-sm">I see it a little differently…</div></div><div className="flex items-start justify-end gap-2"><div className="rounded-xl rounded-tr-sm bg-[#dce8d9] p-3 text-[9px]">There is room for both views.</div><span className="grid size-6 place-items-center rounded-full bg-[#e8dfcf] text-[8px]">B</span></div><div className="flex items-start gap-2"><span className="grid size-6 place-items-center rounded-full bg-[#d5e1d3] text-[8px]">A</span><div className="rounded-xl rounded-tl-sm bg-white p-3 text-[9px] shadow-sm">Tell me more.</div></div></div><div className="mt-3 rounded-full border border-[#dce2d8] bg-white px-3 py-2 text-[8px] text-[#9aa49a]">Write a thought…</div></>}
              {place.image === "personal" && <><div className="mt-5 flex items-center justify-between"><span className="text-[9px] uppercase tracking-[0.15em] text-[#89958a]">Your private space</span><span className="text-[9px] text-[#9ba69b]">03 / 04</span></div><p className="mt-3 text-2xl font-light">A page of your own.</p><p className="mt-1 text-[10px] text-[#879187]">A quiet place to gather your thoughts.</p><div className="mt-5 flex-1 rounded-2xl border border-[#e2e4dc] bg-[#f3f1e9] p-4"><div className="flex items-center justify-between"><span className="text-[9px] text-[#8b978c]">MY NOTES</span><span className="text-[9px] text-[#a6afa4]">•••</span></div><div className="mt-5 rounded-xl bg-white p-4 shadow-sm"><p className="text-[10px] text-[#536458]">What matters to me today</p><div className="mt-4 space-y-2"><div className="h-1.5 w-full rounded bg-[#e7eae2]"/><div className="h-1.5 w-5/6 rounded bg-[#e7eae2]"/><div className="h-1.5 w-4/6 rounded bg-[#e7eae2]"/></div><div className="mt-6 h-14 rounded-lg bg-[#f1eee4]"/></div><p className="mt-3 text-[8px] text-[#8b978c]">Private reflection · At your pace</p></div><div className="mt-3 rounded-xl bg-[#e7eee5] px-3 py-3 text-[9px]">Return when you wish <span className="float-right">↗</span></div></>}
              {place.image === "continuity" && <><div className="mt-5 flex items-center justify-between"><span className="text-[9px] uppercase tracking-[0.15em] text-[#89958a]">Connected experiences</span><span className="text-[9px] text-[#9ba69b]">04 / 04</span></div><p className="mt-3 text-2xl font-light">A path between moments.</p><p className="mt-1 text-[10px] text-[#879187]">Your context can travel with you.</p><div className="relative mt-5 flex flex-1 flex-col justify-center gap-4 rounded-2xl bg-gradient-to-br from-[#e5eee3] to-[#f0eee5] p-4"><div className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm"><span className="grid size-8 place-items-center rounded-lg bg-[#e5eee3]">◯</span><div><p className="text-[10px]">Arrive</p><p className="text-[8px] text-[#929c91]">A moment to pause</p></div><span className="ml-auto text-[#9aab99]">✓</span></div><div className="ml-6 h-4 w-px bg-[#a9bba9]"/><div className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm"><span className="grid size-8 place-items-center rounded-lg bg-[#eee8dc]">◌</span><div><p className="text-[10px]">Continue</p><p className="text-[8px] text-[#929c91]">A dialogue or reflection</p></div><span className="ml-auto text-[#9aab99]">↗</span></div><div className="ml-6 h-4 w-px bg-[#a9bba9]"/><div className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm"><span className="grid size-8 place-items-center rounded-lg bg-[#e5eee3]">⌂</span><div><p className="text-[10px]">Return</p><p className="text-[8px] text-[#929c91]">Pick up at your pace</p></div></div></div><div className="mt-3 rounded-xl bg-[#e7eee5] px-3 py-3 text-[9px]">Your journey, your choice <span className="float-right">↗</span></div></>}
            </div>
            <div className="flex items-start justify-between gap-3"><div><h3 className="text-xl font-light">{place.title}</h3><p className="mt-2 text-xs leading-6 text-[#68736d]">{place.copy}</p></div><span className="mt-1 text-lg transition-transform group-hover:translate-x-1">↗</span></div>
          </Link>)}
        </div>
      </section>

      <section id="guide" className="grid gap-12 px-6 py-24 md:grid-cols-2 md:px-16 md:py-32">
        <div className="relative flex min-h-[440px] items-center justify-center overflow-hidden rounded-[28px] bg-gradient-to-br from-[#dce8dd] via-[#f0f1e9] to-[#d6e2dc] p-6">
          <div className="absolute -left-12 top-10 size-56 rounded-full bg-white/35 blur-3xl"/>
          <div className="relative w-full max-w-lg rounded-2xl border border-white/90 bg-[#fafaf6]/95 p-5 text-[#34483f] shadow-[0_24px_70px_rgba(50,66,53,0.16)]">
            <div className="flex items-center justify-between border-b border-[#d9ded5] pb-3"><div className="flex items-center gap-2"><span className="grid size-7 place-items-center rounded-full bg-[#34483f] text-xs text-white">S</span><span className="text-[9px] uppercase tracking-[0.2em]">Soteria Dialogue · Guided tour</span></div><span className="size-2 rounded-full bg-[#8ca78d]"/></div>
            <p className="mt-5 text-2xl font-light">One digital home.</p><p className="mt-1 text-[10px] text-[#879187]">Four connected spaces. Each with its own purpose.</p>
            <div className="mt-5 grid grid-cols-2 gap-3"><div className="rounded-xl bg-[#e7eee5] p-4"><div className="mb-5 grid size-9 place-items-center rounded-xl bg-white text-lg text-[#809b80]">◯</div><p className="text-xs">Presence</p><p className="mt-1 text-[9px] text-[#879187]">Arrive and pause</p></div><div className="rounded-xl bg-[#f0ece1] p-4"><div className="mb-5 grid size-9 place-items-center rounded-xl bg-white text-lg text-[#9b927e]">◌</div><p className="text-xs">Dialogue</p><p className="mt-1 text-[9px] text-[#879187]">Meet perspectives</p></div><div className="rounded-xl bg-[#f0ece1] p-4"><div className="mb-5 grid size-9 place-items-center rounded-xl bg-white text-lg text-[#9b927e]">▤</div><p className="text-xs">Personal room</p><p className="mt-1 text-[9px] text-[#879187]">Reflect privately</p></div><div className="rounded-xl bg-[#e7eee5] p-4"><div className="mb-5 grid size-9 place-items-center rounded-xl bg-white text-lg text-[#809b80]">⌁</div><p className="text-xs">Continuity</p><p className="mt-1 text-[9px] text-[#879187]">Carry context forward</p></div></div>
            <div className="mt-5 flex items-center justify-between border-t border-[#d9ded5] pt-3 text-[8px] tracking-wide text-[#879187]"><span>YOUR SPACE · YOUR CHOICE</span><span>01 — 04</span></div>
          </div>
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
