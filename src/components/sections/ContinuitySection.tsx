"use client";

/**
 * Continuity is a design prototype only. No real facilitator assignment,
 * staffing availability, or support relationship is connected yet.
 */
export function ContinuitySection() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-light text-foreground/90">Continuity</h2>
        <p className="mt-1 max-w-lg text-sm leading-relaxed text-muted-foreground">
          The intention is to support continuity across conversations and
          touchpoints, without silent hand-offs or unexpected changes.
        </p>
      </div>

      <div className="space-y-3 rounded-xl border border-border/50 bg-muted/20 p-5">
        <p className="text-sm font-medium text-foreground/90">
          Facilitator assignments are not available yet.
        </p>
        <p className="text-sm leading-relaxed text-muted-foreground">
          This prototype is not connected to a staffed peer or clinical team.
          No facilitator has been assigned to you, and no support session is
          being monitored.
        </p>
      </div>

      <div className="space-y-2 rounded-lg border border-dashed p-4">
        <div className="text-xs uppercase tracking-wider text-muted-foreground">
          How continuity is intended to work
        </div>
        <p className="text-sm leading-relaxed text-foreground/80">
          When real services are established, any change in a support team
          should be explained, discussed with the person, and recorded with
          their knowledge. This screen does not currently arrange or provide
          those services.
        </p>
      </div>
    </div>
  );
}
