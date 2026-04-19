import Reveal from "./Reveal";

type Role = {
  company: string;
  role: string;
  meta: string;
  dates: string;
  bullets: string[];
  current?: boolean;
};

type CompanyGroup = {
  company: string;
  current?: boolean;
  roles: Role[];
};

const groups: CompanyGroup[] = [
  {
    company: "Christian Dior Couture",
    current: true,
    roles: [
      {
        company: "Christian Dior Couture",
        role: "Client Marketing Intern",
        meta: "Singapore · On-site · Internship",
        dates: "Jan 2026 — Present",
        current: true,
        bullets: [
          "Collaborate with local teams across 9 Asia Pacific markets to develop 49+ event proposals aligned with regional strategy and Paris HQ.",
          "Consolidate and analyze every post-event and gifting report to generate regional reports and insights.",
          "Coordinate regional gifting operations, consolidating orders from 9 markets and liaising with Paris HQ to ensure timely delivery of local celebration, relational, and stock gifts.",
        ],
      },
    ],
  },
  {
    company: "Artefact",
    roles: [
      {
        company: "Artefact",
        role: "Marketing And Business Development Intern",
        meta: "Los Angeles, California, United States · Hybrid · Internship",
        dates: "Mar 2025 — Aug 2025",
        bullets: [
          "Manage monthly US team newsletter: gather project updates and event highlights, design assets, and publish via CRM.",
          "Rebuilt and streamlined the recruitment process by introducing a clear structure, improving candidate tracking, and standardizing onboarding documentation and communication.",
        ],
      },
    ],
  },
  {
    company: "The Estée Lauder Companies Inc.",
    roles: [
      {
        company: "The Estée Lauder Companies Inc.",
        role: "Marketing Intern (Estée Lauder & La Mer)",
        meta: "Singapore · On-site · Internship",
        dates: "Jul 2024 — Dec 2024",
        bullets: [
          "Supported monthly influencer and seeding campaigns, positioning Estée Lauder among the top 3 in EMV in Singapore.",
          "Managed 30+ E-mail and SMS Campaigns for both brands, executing briefs, developing creative assets, and tracking performance metrics.",
          "Created visual and copy assets for retail partners and coordinated brand strategies with beauty assistants to ensure alignment.",
          "Delivered high-touch luxury experiences to high-value clients through PR gifting and exclusive events.",
        ],
      },
    ],
  },
  {
    company: "IMPASTIAMO",
    roles: [
      {
        company: "IMPASTIAMO",
        role: "Marketing and Events Coordinator",
        meta: "Los Angeles, California, United States · On-site · Part-time",
        dates: "Apr 2023 — Oct 2024 · 1 yr 7 mos",
        bullets: [
          "Oversaw digital marketing initiatives and influencer marketing strategies to drive brand engagement.",
          "Served as the primary client liaison for cooking classes, coordinating all logistics including chef selection, menu planning, and venue arrangements.",
          "Negotiated brand partnerships and sponsorships to fully cover ingredient costs, optimizing budget.",
          "Managed end-to-end project management to host 80+ corporate teams, including global brands like Amazon, Coca-Cola, TikTok, and Google.",
        ],
      },
    ],
  },
  {
    company: "Directions Group Inc",
    roles: [
      {
        company: "Directions Group Inc",
        role: "Event Coordinator Intern",
        meta: "Singapore, Singapore · On-site · Internship",
        dates: "Jun 2023 — Sep 2023 · 4 mos",
        bullets: [
          "Contributed to brand activations for La Mer, Patek Philippe, The Macallan, Fenty Beauty, The Mondrian Hotel, Singapore Arts Museum, Hublot, Takashi Murakami, Samsonite, and Franck Muller.",
          "Facilitated venue coordination, vendor management, event entertainment, and other event logistics.",
          "Supported marketing campaigns, visual merchandising, gifting kits, PR gifting, and client hospitality.",
        ],
      },
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-ivory px-6 py-20 md:py-28">
      <div className="mx-auto max-w-grid">
        <Reveal>
          <h2 className="font-serif text-[36px] text-ink md:text-[48px]">
            Experience
          </h2>
        </Reveal>

        <div className="mt-12 space-y-12">
          {groups.map((group) => (
            <Reveal key={group.company}>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-[140px_1fr] md:gap-10">
                <div className="md:pt-1">
                  {group.current && (
                    <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-champagne">
                      Current Role
                    </p>
                  )}
                  <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-taupe">
                    {group.roles[0].dates.split(" · ")[0]}
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-[22px] text-ink md:text-[24px]">
                    <span className="mr-2 inline-block h-1.5 w-1.5 -translate-y-1 rounded-full bg-champagne align-middle" />
                    {group.company}
                  </h3>

                  <div className="mt-6 space-y-8">
                    {group.roles.map((role, idx) => (
                      <div key={idx}>
                        <p className="text-[16px] font-semibold text-ink md:text-[17px]">
                          {role.role}
                        </p>
                        <p className="mt-1 text-[14px] text-taupe">
                          {role.meta}
                        </p>
                        {idx > 0 && (
                          <p className="mt-1 text-[12px] font-medium uppercase tracking-[0.12em] text-taupe">
                            {role.dates}
                          </p>
                        )}
                        <ul className="mt-4 space-y-3">
                          {role.bullets.map((b, i) => (
                            <li
                              key={i}
                              className="relative pl-6 text-[15px] leading-[1.6] text-ink md:text-[17px]"
                            >
                              <span
                                aria-hidden
                                className="absolute left-0 top-[0.7em] inline-block h-1 w-1 rounded-full bg-champagne"
                              />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-12 border-b border-hairline last:border-b-0" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
