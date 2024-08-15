import { useTranslation } from "@/app/il8n";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileDropdown from "./MobileDropdown";

const Navbar = async ({ lng }) => {
  const { t: common } = await useTranslation(lng, "common");
  const { t } = await useTranslation(lng, "nav");

  return (
    <div className="bg-gray-50">
      <div className="container navbar">
        <div className="navbar-start gap-2 lg:gap-0">
          {/* Mobile Drop down */}
          <MobileDropdown lng={lng} t={t} />
          <Link href={`/${lng}`} className="font-semibold text-2xl">
            {common("brand")}
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href={`/${lng}`}>{t("home")}</Link>
            </li>
            <li>
              <LanguageSwitcher lng={lng} bg="bg-gray-50" />
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-primary">{t("get_started")}</a>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
