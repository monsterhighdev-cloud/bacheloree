import { useTranslation } from "../il8n";

const Home = async ({ params: { lng } }) => {
  const { t } = await useTranslation(lng, "common");

  return <div className="container">{t("welcome")}</div>;
};

export default Home;
