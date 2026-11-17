"use client";

import { useAppStore } from "@/lib/store";
import { Nav } from "@/components/shell/Nav";
import { ArrivalSection } from "@/components/sections/ArrivalSection";
import { OpenWindowSection } from "@/components/sections/OpenWindowSection";
import { AffectLogicSection } from "@/components/sections/AffectLogicSection";
import { TrialogueSection } from "@/components/sections/TrialogueSection";
import { ContinuitySection } from "@/components/sections/ContinuitySection";
import { DirectiveSection } from "@/components/sections/DirectiveSection";
import { WorkbookSection } from "@/components/sections/WorkbookSection";

export default function ExperiencePage() {
  const section = useAppStore((s) => s.section);
  const ageVerified = useAppStore((s) => s.ageVerified);
  const setAgeVerified = useAppStore((s) => s.setAgeVerified);

  if (!ageVerified) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6 py-12">
        <section className="w-full max-w-md space-y-6 text-center">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Soteria Dialogue</p>
            <h1 className="text-2xl font-light text-foreground/90">A space for being with</h1>
          </div>
          <div className="rounded-xl border border-border/50 bg-muted/20 p-5 text-left space-y-3">
            <h2 className="text-sm font-medium">Adults aged 18 and over</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              This prototype is intended only for adults aged 18 or older. By continuing,
              you confirm that you are at least 18 years old.
            </p>
            <p className="text-xs leading-relaxed text-muted-foreground">
              This is an age confirmation for this prototype, not identity or age verification.
              Do not use this service if you are under 18.
            </p>
          </div>
          <button type="button" onClick={() => setAgeVerified(true)}
            className="w-full rounded-md bg-primary px-4 py-3 text-sm font-medium text-primary-foreground">
            I am 18 or older — continue
          </button>
          <a href="/" className="block text-xs text-muted-foreground underline underline-offset-4">Return to the introduction</a>
          <p className="text-[11px] leading-relaxed text-muted-foreground/60">
            Soteria Dialogue is not an emergency service or a substitute for professional care.
          </p>
        </section>
      </main>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <div className="border-b border-border/30 bg-muted/20 px-4 py-2 text-center text-[11px] leading-relaxed text-muted-foreground">
        Prototype only · No live companions, clinical team, emergency response, or secure account storage is connected. Do not enter sensitive information.
      </div>
      <main className="flex-1 container max-w-3xl mx-auto p-6 sm:p-8 lg:p-12 soft-fade" key={section}>
        {section === "arrival" && <ArrivalSection />}
        {section === "window" && <OpenWindowSection />}
        {section === "affect" && <AffectLogicSection />}
        {section === "trialogue" && <TrialogueSection />}
        {section === "continuity" && <ContinuitySection />}
        {section === "directive" && <DirectiveSection />}
        {section === "workbook" && <WorkbookSection />}
      </main>
      <footer className="border-t border-border/20 py-3 px-4">
        <div className="container max-w-3xl mx-auto flex items-center justify-between text-[10px] text-muted-foreground/40">
          <a href="/">Soteria Dialogue — Being With</a>
          <span>Adults 18+ · Not an emergency service</span>
        </div>
      </footer>
    </div>
  );
}
