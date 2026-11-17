"use client";

import { useEffect, useRef, useState } from "react";
import { useAppStore } from "@/lib/store";

/**
 * Visual interaction prototype only. No peer companion, live presence,
 * audio/video, messaging, or monitored support service is connected.
 */
export function OpenWindowSection() {
  const { windowOpen, setWindowOpen } = useAppStore();
  const [sessionDuration, setSessionDuration] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (windowOpen) {
      timerRef.current = setInterval(() => setSessionDuration((s) => s + 1), 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
      setSessionDuration(0);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [windowOpen]);

  const formatDuration = (s: number) =>
    `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, "0")}`;

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center space-y-8">
      <div className="max-w-md space-y-3 text-center">
        <h2 className="text-xl font-light text-foreground/90">The Open Window</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          A quiet-presence concept: a space where someone could be alongside you
          without requiring conversation.
        </p>
      </div>

      <div className="rounded-xl border border-border/50 bg-muted/20 p-5 text-center">
        <p className="text-sm font-medium text-foreground/90">
          No companion service is connected
        </p>
        <p className="mt-2 max-w-sm text-xs leading-relaxed text-muted-foreground">
          Opening this window starts only a local visual demonstration. No person
          joins, sees your activity, or monitors this screen. There is no live
          chat, call, or emergency support.
        </p>
      </div>

      {windowOpen && (
        <div className="flex flex-col items-center gap-3">
          <div className="size-32 rounded-full border border-primary/30 bg-primary/10 flex items-center justify-center">
            <div className="size-20 rounded-full bg-primary/20 breathe-anim" />
          </div>
          <p className="font-mono text-xs text-muted-foreground">{formatDuration(sessionDuration)}</p>
          <p className="text-xs text-muted-foreground">Local demonstration only</p>
        </div>
      )}

      <button
        onClick={() => setWindowOpen(!windowOpen)}
        className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground"
      >
        {windowOpen ? "Close demonstration" : "Start visual demonstration"}
      </button>
    </div>
  );
}
