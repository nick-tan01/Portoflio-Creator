import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="px-6 py-20 md:py-28">
      <Reveal as="div" className="mx-auto max-w-prose">
        <h2 className="font-serif text-[36px] text-ink md:text-[48px]">About</h2>
        <div className="mt-10 space-y-6 text-[16px] leading-[1.65] text-ink md:text-[17px]">
          <p>
            Hi! I&apos;m a UCLA graduate with hands-on experience across CRM,
            digital marketing, e-commerce, PR, and events for global brands.
            Previously at Estée Lauder companies, I managed 30+ EDM and SMS
            campaigns across two brands, created assets across retail, social,
            and paid media, and delivered high-touch VIP experiences.
            Currently, I&apos;m at Christian Dior Couture, supporting the
            Regional Client Marketing team across nine APAC markets, including
            large-scale event planning and cross-market coordination. As my
            internship concludes in mid-July, I&apos;m now looking for a
            full-time opportunity where I can continue growing in marketing and
            events.
          </p>
          <p>
            Colleagues often describe me as an outgoing, people-first teammate
            who&apos;s easy to connect with. Having grown up in Shanghai&apos;s
            international school environment, studied in Los Angeles, and now
            based in Singapore, I&apos;m comfortable navigating diverse cultures
            and communicating with all kinds of stakeholders — from creatives
            to corporate leaders.
          </p>

          <blockquote className="my-10 border-l-2 border-champagne pl-6 text-center md:my-12">
            <p className="font-serif text-[22px] italic leading-[1.45] text-ink md:text-[28px]">
              <span className="text-champagne">&ldquo;</span>
              I love building thoughtful, data-driven campaigns, collaborating
              across teams, and bringing ideas or events to life with clarity
              and strong execution.
              <span className="text-champagne">&rdquo;</span>
            </p>
          </blockquote>

          <p>
            Outside of work, you&apos;ll usually find me on a tennis court, in
            the gym, or playing pickleball — I&apos;m happiest when I&apos;m
            active.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
