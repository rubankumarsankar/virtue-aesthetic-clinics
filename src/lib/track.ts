/**
 * Lightweight click tracking. Pushes to `window.dataLayer` (Google Tag Manager / GA4 compatible)
 * and dispatches a `vac:track` DOM event, so any analytics tool can be wired up later
 * without touching the components. No data leaves the browser until a tag is configured.
 */
type TrackProps = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function track(event: string, props: TrackProps = {}): void {
  if (typeof window === "undefined") return;
  const payload = { event, ...props };
  (window.dataLayer ??= []).push(payload);
  window.dispatchEvent(new CustomEvent("vac:track", { detail: payload }));
}
