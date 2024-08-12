"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useEffect, useState } from "react";

const lang = [
  {
    name: "English",
    slug: "En",
  },
  {
    name: "Bangla",
    slug: "Bn",
  },
];

const pathFilters = ["en", "bn", ""];

const LanguageSwitcher = ({ lng }) => {
  const [switcherOpen, setSwitcherOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState({
    name: "English",
    slug: "En",
  });

  const pathname = usePathname();

  useEffect(() => {
    lang.map((l) => {
      if (l.slug.toLocaleLowerCase() === lng) {
        setSelectedLanguage(l);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative">
      <div>
        {lang.map((l) => (
          <div key={l.slug}>
            {" "}
            <Link
              href={`/${l.slug.toLocaleLowerCase()}/${pathname
                .split("/")
                .filter((p) => !pathFilters.includes(p))
                .join("/")}`}
            >
              {l.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default LanguageSwitcher;
