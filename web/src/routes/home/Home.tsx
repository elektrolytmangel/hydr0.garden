import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { Button } from "../../components/ui/button/Button";
import { Paragraph } from "../../components/ui/paragraph/Paragraph";

export const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col h-full w-full items-center justify-center relative text-center px-0 lg:px-6 ">
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-7xl text-foreground mb-6 tracking-tight font-serif">
          {t("home.title")}
        </h1>
        <hr className="text-white w-1/2 md:w-2/3 mx-auto" />
        <div className="mt-12 mb-20 w-full rounded-sm p-5 bg-white/10 backdrop-blur-sm flex flex-col items-center justify-center">
          <Paragraph className="italic">{t("home.intro")}</Paragraph>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-2 px-2">
          <Link to="/plants" className="w-full md:w-1/2">
            <Button>{t("home.showPlants")}</Button>
          </Link>
          <span className="px-5 text-lg font-bold text-foreground uppercase">
            {t("home.or")}
          </span>
          <Link to="/scan" className="w-full md:w-1/2">
            <Button>{t("home.scanQrCode")}</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
