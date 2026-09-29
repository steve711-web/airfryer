import { topAirFryers } from "@/lib/topAirFryers";

export default function TopAirFryers() {
  return (
    <div className="divide-y divide-panel/10 border-y border-panel/10">
      {topAirFryers.map((pick) => (
        <div
          key={pick.id}
          className="grid items-start gap-3 py-7 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-8"
        >
          <span className="font-readout text-3xl font-bold text-panel/15 sm:text-4xl">
            {String(pick.rank).padStart(2, "0")}
          </span>
          <div>
            <span className="inline-flex items-center rounded-full bg-brass/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-[#8A6A2E]">
              {pick.bestFor}
            </span>
            <h3 className="mt-2 font-display text-xl font-semibold text-panel sm:text-2xl">
              {pick.name}
            </h3>
            <p className="mt-1 text-xs uppercase tracking-widest text-panel/40">
              {pick.capacity}
            </p>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-panel/60">{pick.note}</p>
          </div>
          <a
            href={pick.amazonSearch}
            target="_blank"
            rel="nofollow sponsored noopener"
            className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-panel px-4 py-2 text-sm font-semibold text-cream transition-colors hover:bg-signal sm:justify-self-end"
          >
            Check price →
          </a>
        </div>
      ))}
    </div>
  );
}
