"use client";

import Link from "next/link";

const places = [
  {
    n: "01", title: "The Open Window", tag: "PRESENCE",
    copy: "A quieter kind of space. Room to pause, breathe and arrive without pressure.",
    image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1200&q=85",
    href: "/experience"
  },
  {
    n: "02", title: "The Dialogue House", tag: "MANY VOICES",
    copy: "A place for different perspectives to meet, without one voice owning the story.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
    href: "/experience"
  },
  {
    n: "03", title: "The Workbook", tag: "YOUR SPACE",
    copy: "A personal place to gather thoughts, questions and things worth carrying forward.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=85",
    href: "/experience"
  },
  {
    n: "04", title: "The Continuity House", tag: "CONNECTION",
    copy: "An idea for keeping the thread between conversations, people and moments.",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=85",
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

      <section className="relative flex min-h-[88svh] items-end overflow-hidden bg-[#283b35] px-6 pb-16 pt-36 text-white md:min-h-[94svh] md:px-16 md:pb-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=2200&q=90')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#14251f]/80 via-[#1e3028]/40 to-[#17231e]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#17231e]/70 via-transparent to-[#17231e]/25" />
        <div className="relative z-10 max-w-4xl">
          <p className="mb-7 text-[10px] uppercase tracking-[0.35em] text-[#e2d7c2]">A different way of being together</p>
          <h1 className="max-w-4xl text-5xl font-light leading-[1.05] tracking-[-0.04em] md:text-7xl lg:text-[5.8rem]">
            Not here to fix you.<br /><span className="font-serif italic text-[#e4d8c1]">Here to be with you.</span>
          </h1>
          <div className="mt-9 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <p className="max-w-md text-sm leading-7 text-white/75 md:text-base">
              Soteria Dialogue is a human-centred concept for making space for presence, conversation and shared understanding.
            </p>
            <a href="#concept" className="inline-flex w-fit items-center gap-4 border-b border-white/50 pb-2 text-xs tracking-wide">Discover the idea <span className="text-lg">↓</span></a>
          </div>
        </div>
        <div className="absolute bottom-8 right-8 hidden text-[9px] uppercase tracking-[0.28em] text-white/50 md:block">Presence · Dialogue · Choice</div>
      </section>

      <section id="concept" className="grid gap-12 px-6 py-24 md:grid-cols-[0.8fr_1.2fr] md:px-16 md:py-32">
        <div>
          <p className="text-[10px] uppercase tracking-[0.28em] text-[#8b806c]">01 / The idea</p>
          <h2 className="mt-6 max-w-sm text-4xl font-light leading-tight tracking-tight md:text-5xl">A space around the person, <span className="font-serif italic text-[#8b806c]">not the system.</span></h2>
        </div>
        <div className="flex flex-col justify-end gap-8">
          <p className="max-w-2xl text-xl font-light leading-relaxed text-[#52615a] md:text-2xl">
            What if support began with listening? What if a person could bring their own people, meanings and questions into the room?
          </p>
          <div className="grid grid-cols-2 gap-6 border-t border-[#c9c5ba] pt-6 md:grid-cols-4">
            {["Presence", "Dialogue", "Autonomy", "Continuity"].map((item, i) => <div key={item}><span className="text-[10px] text-[#a69a84]">0{i+1}</span><p className="mt-2 text-sm">{item}</p></div>)}
          </div>
        </div>
      </section>

      <section id="houses" className="bg-[#e5e2d9] px-6 py-24 md:px-16 md:py-28">
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div><p className="text-[10px] uppercase tracking-[0.28em] text-[#8b806c]">02 / Explore the world</p><h2 className="mt-5 text-4xl font-light tracking-tight md:text-5xl">A house for every kind<br />of <span className="font-serif italic text-[#8b806c]">conversation.</span></h2></div>
          <p className="max-w-xs text-sm leading-6 text-[#68736d]">Explore the spaces and ideas that shape the Soteria Dialogue concept.</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {places.map((place) => <Link href={place.href} key={place.n} className="group block">
            <div className="relative mb-5 aspect-[4/5] overflow-hidden bg-[#c8c5bb]">
              <div className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105" style={{backgroundImage:`url("${place.image}")`}} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/5" />
              <span className="absolute left-5 top-5 text-xs text-white/80">{place.n}</span>
              <span className="absolute bottom-5 left-5 text-[9px] uppercase tracking-[0.24em] text-white/80">{place.tag}</span>
            </div>
            <div className="flex items-start justify-between gap-3"><div><h3 className="text-xl font-light">{place.title}</h3><p className="mt-2 text-xs leading-6 text-[#68736d]">{place.copy}</p></div><span className="mt-1 text-lg transition-transform group-hover:translate-x-1">↗</span></div>
          </Link>)}
        </div>
      </section>

      <section id="guide" className="grid gap-12 px-6 py-24 md:grid-cols-2 md:px-16 md:py-32">
        <div className="relative min-h-[420px] overflow-hidden bg-[#c5c3b7]">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&w=1400&q=85')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-[#263b32]/15" />
          <div className="absolute bottom-6 left-6 text-white"><p className="text-[9px] uppercase tracking-[0.28em]">A gentle introduction</p><p className="mt-2 font-serif text-3xl italic">Take your time.</p></div>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-[10px] uppercase tracking-[0.28em] text-[#8b806c]">03 / A guided tour</p>
          <h2 className="mt-6 text-4xl font-light leading-tight md:text-5xl">See how the pieces <span className="font-serif italic text-[#8b806c]">fit together.</span></h2>
          <p className="mt-6 max-w-md text-sm leading-7 text-[#68736d]">A short, visual introduction to the spaces, the language and the choices behind the platform. No long manual. Explore at your own pace.</p>
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
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=2000&q=85')] bg-cover bg-center opacity-25" />
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
