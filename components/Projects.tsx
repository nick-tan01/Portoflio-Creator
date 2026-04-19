import Reveal from "./Reveal";

const projects = [
  {
    eyebrow: "CHRISTIAN DIOR COUTURE",
    title: "49+ event proposals across 9 APAC markets",
    summary:
      "Collaborated with local teams across nine Asia Pacific markets to develop event proposals aligned with regional strategy and Paris HQ.",
    tags: ["Events", "Cross-market", "Strategy"],
  },
  {
    eyebrow: "ESTÉE LAUDER COMPANIES",
    title: "30+ EDM & SMS campaigns across two brands",
    summary:
      "Managed end-to-end campaign execution for Estée Lauder and La Mer — briefs, creative assets, and performance tracking.",
    tags: ["CRM", "Email", "Lifecycle"],
  },
  {
    eyebrow: "ESTÉE LAUDER COMPANIES",
    title: "VIP gifting & PR experiences",
    summary:
      "Delivered high-touch luxury experiences to high-value clients through PR gifting and exclusive events; supported influencer and seeding campaigns that placed Estée Lauder in Singapore's top 3 EMV.",
    tags: ["PR", "VIP", "Influencer"],
  },
  {
    eyebrow: "IMPASTIAMO",
    title: "80+ corporate cooking experiences",
    summary:
      "End-to-end project management for corporate teams including Amazon, Coca-Cola, TikTok, and Google — chef selection, menu planning, venue, and brand partnerships that fully covered ingredient costs.",
    tags: ["Events", "Partnerships", "Client"],
  },
  {
    eyebrow: "DIRECTIONS GROUP",
    title: "Brand activations for La Mer, Patek Philippe, Hublot, Fenty Beauty",
    summary:
      "Supported activations across luxury and beauty clients including The Macallan, Mondrian Hotel, Singapore Arts Museum, Takashi Murakami, Samsonite, and Franck Muller — venue, vendors, gifting, and hospitality.",
    tags: ["Activations", "Logistics", "Gifting"],
  },
  {
    eyebrow: "ARTEFACT",
    title: "Monthly US team newsletter",
    summary:
      "Gather project updates and event highlights, design assets, and publish via CRM. Also rebuilt the recruitment process — clearer structure, candidate tracking, standardized onboarding.",
    tags: ["Newsletter", "CRM", "Ops"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-ivory px-6 py-20 md:py-28">
      <div className="mx-auto max-w-grid">
        <Reveal>
          <h2 className="font-serif text-[36px] text-ink md:text-[48px]">
            Selected Work &amp; Campaigns
          </h2>
          <p className="mt-4 max-w-prose text-[16px] text-taupe md:text-[17px]">
            A snapshot of campaigns, events, and workstreams across luxury,
            beauty, and lifestyle brands.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <Reveal key={p.title}>
              <article className="group h-full rounded-2xl border border-hairline bg-surface p-8 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(26,26,26,0.06)]">
                <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-champagne">
                  {p.eyebrow}
                </p>
                <h3 className="mt-3 font-serif text-[22px] leading-[1.25] text-ink">
                  {p.title}
                </h3>
                <p className="mt-4 text-[16px] leading-[1.6] text-ink/85">
                  {p.summary}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-hairline bg-chip px-3 py-1 text-[12px] font-medium text-taupe"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
