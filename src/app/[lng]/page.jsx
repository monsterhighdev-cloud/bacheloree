import { useTranslation } from "../il8n";

const Home = async ({ params: { lng } }) => {
  const { t } = await useTranslation(lng, "common");

  return <div>{t("welcome")}</div>;
};

export default Home;
