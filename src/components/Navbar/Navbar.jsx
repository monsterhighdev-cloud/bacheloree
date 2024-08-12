import { useTranslation } from "@/app/il8n";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = async ({ lng }) => {
  const { t } = await useTranslation(lng, "nav");

  return (
    <header className="bg-gray-50">
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <div>Logo</div>
        {/* NavLinks */}
        <nav>
          <ul>
            <li>
              <Link href={`/${lng}`}>{t("home")}</Link>
            </li>
            <li>
              <Link href={`/${lng}/auth/login`}>{t("login")}</Link>
            </li>
            <li>
              <Link href={`/${lng}/auth/login`}>{t("register")}</Link>
            </li>
          </ul>
        </nav>
        {/* Language Switcher */}
        <LanguageSwitcher lng={lng} />
      </div>
    </header>
  );
};
export default Navbar;
