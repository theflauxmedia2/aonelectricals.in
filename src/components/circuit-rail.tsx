export function CircuitStrip() {
  return (
    <div className="circuit-strip flex md:hidden" aria-hidden="true">
      <span className="wire wire-live" />
      <span className="wire wire-neutral" />
      <span className="wire wire-earth" />
    </div>
  );
}
