import Reveal from "./Reveal";

const skills = [
  "Social Media",
  "Email Marketing",
  "Marketing",
  "Communication",
  "Event Management",
  "CRM",
  "Influencer Marketing",
  "PR Gifting",
  "Cross-market Coordination",
  "Vendor Management",
  "Visual Merchandising",
  "Brand Partnerships",
];

const languages = [
  { name: "Chinese", level: "Native or bilingual proficiency" },
  { name: "English", level: "Native or bilingual proficiency" },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-grid">
        <Reveal>
          <h2 className="font-serif text-[28px] text-ink md:text-[32px]">
            Skills &amp; Tools
          </h2>
        </Reveal>

        <Reveal>
          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((s) => (
              <span
                key={s}
                className="rounded-full border border-hairline bg-chip px-4 py-2 text-[14px] font-medium text-taupe"
              >
                {s}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <h3 className="mt-16 font-serif text-[24px] text-ink md:text-[28px]">
            Languages
          </h3>
          <ul className="mt-6 space-y-2">
            {languages.map((l) => (
              <li
                key={l.name}
                className="text-[15px] text-ink md:text-[16px]"
              >
                <span className="font-semibold">{l.name}</span>
                <span className="text-taupe"> — {l.level}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
