export default function Loading() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-24" role="status" aria-live="polite">
      <p className="kicker">Charging circuit</p>
      <p className="mt-4 font-heading text-3xl">Loading A One Electricals…</p>
      <div className="mt-8 h-px w-48 origin-left animate-pulse bg-primary" />
    </div>
  );
}
