export function FaqList({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((item) => (
        <details key={item.question} className="group py-5">
          <summary className="cursor-pointer list-none font-heading text-xl tracking-tight marker:content-none [&::-webkit-details-marker]:hidden">
            <span className="flex items-start justify-between gap-4">
              {item.question}
              <span aria-hidden="true" className="faq-mark text-primary">
                +
              </span>
            </span>
          </summary>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
