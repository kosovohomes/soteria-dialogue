"use client";

/**
 * Triage is intentionally unavailable in this prototype.
 *
 * The previous screen generated an individual probability using invented
 * weights and a simplified formula. That was not a validated implementation
 * of the cited research and could mislead people making health decisions.
 * Do not re-enable predictive scoring without a validated protocol, clinical
 * governance, evidence review, and appropriate testing.
 */
export function TriageSection() {
  return (
    <section className="max-w-xl space-y-5">
      <div>
        <h2 className="text-xl font-light text-foreground/90">Triage and care pathways</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          This feature is not available yet.
        </p>
      </div>

      <div className="space-y-3 rounded-xl border border-border/50 bg-muted/20 p-5">
        <p className="text-sm leading-relaxed text-foreground/90">
          The earlier prototype displayed personal response probabilities and care-pathway
          suggestions using a simplified calculation. That calculation has not been
          validated for individual decisions, so it has been removed.
        </p>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Soteria Dialogue will not estimate your diagnosis, risk, medication needs, or
          likely treatment response. Any future care-pathway feature must be reviewed
          with qualified professionals and clearly explain its evidence and limitations.
        </p>
      </div>

      <p className="text-xs leading-relaxed text-muted-foreground">
        This platform is not an emergency service or a substitute for professional care.
        If you may be in immediate danger or need urgent help, contact local emergency
        services or a qualified crisis service in your area.
      </p>
    </section>
  );
}
