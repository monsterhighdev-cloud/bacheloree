"use client";
import { useTranslation } from "@/app/il8n/client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useState } from "react";

import BanglaImg from "@/../public/languages/bangla.png";
import EnglishImg from "@/../public/languages/eng.png";
import Image from "next/image";

const lang = [
  {
    name: "English",
    slug: "En",
    img: EnglishImg,
  },
  {
    name: "Bangla",
    slug: "Bn",
    img: BanglaImg,
  },
];

const pathFilters = ["en", "bn", ""];

const LanguageSwitcher = ({ lng, bg = "" }) => {
  const [switcherOpen, setSwitcherOpen] = useState(false);

  const { t } = useTranslation(lng, "nav");
  const pathname = usePathname();

  return (
    <details>
      <summary>{t("language_switcher")}</summary>
      <ul className={`rounded-t-none ${bg}`}>
        {lang.map((l) => (
          <li key={l.slug}>
            <Link
              href={`/${l.slug.toLocaleLowerCase()}/${pathname
                .split("/")
                .filter((p) => !pathFilters.includes(p))
                .join("/")}`}
            >
              <Image
                src={l.img}
                alt="English Language"
                width={25}
                height={25}
              />{" "}
              {l.name}
            </Link>
          </li>
        ))}
      </ul>
    </details>
  );
};
export default LanguageSwitcher;
