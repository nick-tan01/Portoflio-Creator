"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  src: string;
  company: string;
};

export default function CompanyLogo({ src, company }: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-champagne/20 text-[15px] font-semibold text-champagne">
        {company.charAt(0)}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={`${company} logo`}
      width={44}
      height={44}
      className="h-11 w-11 flex-shrink-0 rounded-lg object-contain ring-1 ring-hairline"
      onError={() => setFailed(true)}
    />
  );
}
