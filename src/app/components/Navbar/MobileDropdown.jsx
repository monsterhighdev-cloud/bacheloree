import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";
import LanguageSwitcher from "./LanguageSwitcher";

const MobileDropdown = ({ lng, t }) => {
  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <CiMenuBurger className="text-2xl" />
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
      >
        <li>
          <Link href={`/${lng}`}>{t("home")}</Link>
        </li>
        <li>
          <LanguageSwitcher lng={lng} />
        </li>
      </ul>
    </div>
  );
};
export default MobileDropdown;
