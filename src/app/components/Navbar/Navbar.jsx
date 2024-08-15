import { useTranslation } from "@/app/il8n";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileDropdown from "./MobileDropdown";

const Navbar = async ({ lng }) => {
  const { t: common } = await useTranslation(lng, "common");
  const { t } = await useTranslation(lng, "nav");

  return (
    <div className="bg-base-200">
      <div className="container navbar">
        <div className="navbar-start gap-2 lg:gap-0">
          {/* Mobile Drop down */}
          <MobileDropdown lng={lng} t={t} />
          <Link href={`/${lng}`} className="font-semibold text-2xl">
            {common("brand")}
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 z-50">
            <li>
              <Link href={`/${lng}`}>{t("home")}</Link>
            </li>
            <li>
              <Link href={`/${lng}/create`}>{t("Create")}</Link>
            </li>
            <li>
              <LanguageSwitcher lng={lng} bg="bg-base-200" />
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
