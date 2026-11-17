import Link from "next/link";

const steps = [
  {n:"01",title:"Arrive",copy:"Begin with a moment to orient yourself. There is no need to explain everything at once.",image:"https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1000&q=85"},
  {n:"02",title:"Explore",copy:"Move through the spaces: presence, reflection, dialogue and the idea of continuity.",image:"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85"},
  {n:"03",title:"Choose",copy:"Notice what feels useful. You decide what to open, what to leave, and when to pause.",image:"https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&w=1000&q=85"}
];

export default function TutorialPage() {
  return (
    <main className="min-h-screen bg-[#f0eee8] text-[#26332f]">
      <header className="flex items-center justify-between px-6 py-6 md:px-14">
        <Link href="/" className="text-xs uppercase tracking-[0.24em]">Soteria Dialogue</Link>
        <Link href="/" className="text-xs text-[#68736d] hover:text-[#26332f]">← Back to introduction</Link>
      </header>
      <section className="px-6 pb-16 pt-12 md:px-14 md:pb-24 md:pt-20">
        <p className="text-[10px] uppercase tracking-[0.28em] text-[#8b806c]">A short visual guide</p>
        <h1 className="mt-6 max-w-3xl text-5xl font-light leading-[1.05] tracking-tight md:text-7xl">There is no right way<br/>to <span className="font-serif italic text-[#8b806c]">begin.</span></h1>
        <p className="mt-7 max-w-lg text-sm leading-7 text-[#68736d]">A simple introduction to the Soteria Dialogue concept. Take it one step at a time, or simply explore.</p>
      </section>
      <section className="grid gap-6 px-6 pb-24 md:grid-cols-3 md:px-14">
        {steps.map((s)=><article key={s.n}>
          <div className="relative mb-6 aspect-[4/5] overflow-hidden bg-[#d5d1c7]">
            <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage:`url("${s.image}")`}}/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent"/>
            <span className="absolute bottom-5 left-6 text-4xl font-light text-white">{s.n}</span>
          </div>
          <h2 className="text-2xl font-light">{s.title}</h2>
          <p className="mt-3 max-w-sm text-sm leading-7 text-[#68736d]">{s.copy}</p>
        </article>)}
      </section>
      <section className="bg-[#34483f] px-6 py-20 text-center text-[#f0eee8] md:px-14">
        <p className="text-[10px] uppercase tracking-[0.28em] text-[#c7bda8]">Ready when you are</p>
        <h2 className="mx-auto mt-5 max-w-xl text-4xl font-light md:text-5xl">Explore the spaces.<br/><span className="font-serif italic text-[#d8cbb3]">At your own pace.</span></h2>
        <Link href="/experience" className="mt-8 inline-flex rounded-full bg-[#f0eee8] px-8 py-4 text-xs text-[#34483f] hover:bg-white">Enter the prototype ↗</Link>
        <p className="mx-auto mt-5 max-w-lg text-[10px] leading-5 text-white/50">This is an interactive prototype. No live companions, clinical team, emergency response or secure account storage is connected.</p>
      </section>
      <footer className="px-6 py-7 text-center text-[10px] text-[#7b817a] md:px-14">Soteria Dialogue · Adults 18+ · Developing concept and prototype</footer>
    </main>
  );
}
