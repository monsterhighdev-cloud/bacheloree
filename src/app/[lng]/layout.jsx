import Footer from "@/app/components/Footer/Footer";
import Navbar from "@/app/components/Navbar/Navbar";
import { dir } from "i18next";
import { Inter } from "next/font/google";
import Chatbot from "../components/Chatbot/Chatbot";
import { languages } from "../il8n/settings";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bacheloree",
  description: "Bacheloree Web App",
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({ children, params: { lng } }) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={inter.className}>
        <div className="flex flex-col min-h-dvh">
          <Navbar lng={lng} />
          <main className="flex-grow">{children}</main>
          <Chatbot />
          <Footer lng={lng} />
        </div>
      </body>
    </html>
  );
}
