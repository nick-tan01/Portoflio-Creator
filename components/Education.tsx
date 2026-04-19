import Reveal from "./Reveal";

const schools = [
  {
    name: "UCLA (University of California, Los Angeles)",
    degree: "Bachelors, PSYCHOLOGY",
    dates: "Sep 2021 — Jun 2025",
    activities:
      "Singapore Students' Association Internal Vice President (2021-2024), Bruin Club Tennis External Vice President (2022-2025), Creative Labs Marketing Team (2024-2025), The Undergraduate Psychology Society Member (2021-2024)",
  },
  {
    name: "Shanghai American School",
    degree: "High School Diploma",
    dates: "Aug 2017 — Jun 2021",
    activities:
      "Executive Council Vice President (2020-2021), Student Council Senator (2017-2020), Prom Committee President (2019-2020), Varsity Tennis Team Captain (2019-2021), Varsity Badminton Team Captain (2020-2021), Link Crew Leader (2020-2021), Relay for Life Leader (2017-2020)",
  },
];

export default function Education() {
  return (
    <section id="education" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-grid">
        <Reveal>
          <h2 className="font-serif text-[36px] text-ink md:text-[48px]">
            Education
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {schools.map((s) => (
            <Reveal key={s.name}>
              <article className="h-full rounded-xl border border-hairline bg-surface p-6">
                <h3 className="font-serif text-[20px] text-ink">{s.name}</h3>
                <p className="mt-2 text-[15px] text-taupe">
                  {s.degree} · {s.dates}
                </p>
                <p className="mt-4 text-[15px] leading-[1.6] text-ink">
                  {s.activities}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
