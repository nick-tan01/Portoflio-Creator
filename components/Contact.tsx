import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="bg-ivory px-6 py-24 md:py-28">
      <Reveal as="div" className="mx-auto max-w-prose text-center">
        <h2 className="font-serif text-[36px] text-ink md:text-[48px]">
          Let&apos;s connect
        </h2>
        <p className="mx-auto mt-6 max-w-[60ch] text-[16px] leading-[1.6] text-ink md:text-[17px]">
          Open to full-time roles in client marketing, events, and brand —
          Singapore, Los Angeles, or remote.
        </p>
        <div className="mt-8 flex justify-center">
          <a
            href="https://www.linkedin.com/in/tania-yxi-tan/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-champagne px-7 py-3 text-[14px] font-medium tracking-wide text-ivory transition-colors hover:bg-[#7a6140]"
          >
            Message on LinkedIn
          </a>
        </div>
      </Reveal>
    </section>
  );
}
