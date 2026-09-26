import { cn } from "@/lib/utils";

export function CableCores({
  className,
  size = "sm",
}: {
  className?: string;
  size?: "sm" | "md";
}) {
  const dot = size === "md" ? "size-1.5" : "size-1";

  return (
    <span
      className={cn("inline-flex items-center gap-[3px]", className)}
      aria-hidden="true"
    >
      <span className={cn("rounded-full bg-live", dot)} />
      <span className={cn("rounded-full bg-wire-neutral", dot)} />
      <span className="relative inline-flex overflow-hidden rounded-full">
        <span
          className={cn(
            "rounded-full bg-earth",
            dot,
            "bg-[repeating-linear-gradient(135deg,var(--earth)_0_2px,var(--earth-stripe)_2px_4px)]"
          )}
        />
      </span>
    </span>
  );
}
