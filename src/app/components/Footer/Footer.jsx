import { useTranslation } from "@/app/il8n";
import Link from "next/link";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = async ({ lng }) => {
  const { t: common } = await useTranslation(lng, "common");
  const { t: footer } = await useTranslation(lng, "footer");

  return (
    <div className="bg-base-200">
      <footer className="container footer text-base-content p-10">
        <nav>
          <h6 className="footer-title">{footer("services")}</h6>
          <Link href={`#`} className="link link-hover">
            {footer("house_rent")}
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">{footer("company")}</h6>
          <Link href={`#`} className="link link-hover">
            {footer("about_us")}
          </Link>
          <Link href={`#`} className="link link-hover">
            {footer("contact")}
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">{footer("legal")}</h6>
          <Link href={`#`} className="link link-hover">
            {footer("terms_of_use")}
          </Link>
          <Link href={`#`} className="link link-hover">
            {footer("privacy_policy")}
          </Link>
          <Link href={`#`} className="link link-hover">
            {footer("cookie_policy")}
          </Link>
        </nav>
      </footer>
      <footer className="container footer text-base-content border-base-300 border-t px-10 py-4">
        <aside className="grid-flow-col items-center">
          <p>
            {common("brand")}
            <br />
            {/* Providing reliable tech since 1992 */}
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <Link href={`#`}>
              <FaFacebook className="text-2xl" />
            </Link>
            <Link href={`#`}>
              <FaLinkedin className="text-2xl" />
            </Link>
          </div>
        </nav>
      </footer>
    </div>
  );
};
export default Footer;
