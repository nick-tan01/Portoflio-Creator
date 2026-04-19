"use client";

import Image from "next/image";
import { useState } from "react";

const brands = [
  "Christian Dior Couture",
  "Estée Lauder",
  "La Mer",
  "Artefact",
  "IMPASTIAMO",
  "Directions Group",
];

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="top" className="px-6 pt-16 md:pt-24">
      <div className="mx-auto max-w-page">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-5 md:gap-16">
          <div className="md:col-span-3">
            <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-taupe">
              Client Marketing · Events · Business Development
            </p>
            <h1 className="mt-5 font-serif text-[56px] leading-[1.05] text-ink md:text-[80px]">
              Tania Tan
            </h1>
            <p className="mt-6 max-w-[34ch] text-[20px] leading-[1.5] text-ink md:text-[22px]">
              UCLA grad with hands-on experience across CRM, digital marketing,
              e-commerce, PR, and events for global brands.
            </p>
            <p className="mt-5 text-[14px] font-medium tracking-wide text-taupe">
              Singapore (currently) · Los Angeles
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/tania-yxi-tan/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-champagne px-6 py-3 text-[14px] font-medium tracking-wide text-ivory transition-colors hover:bg-[#7a6140]"
              >
                Get in touch
              </a>
              <a
                href="#experience"
                className="inline-flex items-center justify-center rounded-full border border-ink/20 px-6 py-3 text-[14px] font-medium tracking-wide text-ink transition-colors hover:border-ink/60"
              >
                View experience
              </a>
            </div>
          </div>

          <div className="md:col-span-2 flex justify-center md:justify-end">
            {imgError ? (
              <div
                aria-label="TT monogram"
                className="flex h-[220px] w-[220px] items-center justify-center rounded-full bg-champagne ring-2 ring-champagne/40 md:h-[320px] md:w-[320px]"
              >
                <span className="font-serif text-[88px] font-semibold text-ivory md:text-[120px]">
                  TT
                </span>
              </div>
            ) : (
              <div className="relative h-[220px] w-[220px] overflow-hidden rounded-full ring-1 ring-hairline md:h-[320px] md:w-[320px]">
                <Image
                  src="/tania.jpg"
                  alt="Portrait of Tania Tan"
                  fill
                  priority
                  sizes="(min-width: 768px) 320px, 220px"
                  className="object-cover"
                  onError={() => setImgError(true)}
                />
              </div>
            )}
          </div>
        </div>

        <div className="mt-20 border-t border-hairline pt-8">
          <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-taupe">
            Previously
          </p>
          <p className="mt-3 text-[16px] font-medium text-taupe">
            {brands.join(" · ")}
          </p>
        </div>
      </div>
    </section>
  );
}
