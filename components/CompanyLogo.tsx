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
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-champagne/20 text-[13px] font-semibold text-champagne">
        {company.charAt(0)}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={`${company} logo`}
      width={36}
      height={36}
      className="rounded-full object-contain ring-1 ring-hairline"
      onError={() => setFailed(true)}
    />
  );
}
