import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export const Title = () => {
  const { t } = useTranslation();
  return (
    <Link to="/" className="cursor-pointer z-10">
      <h1 className="text-5xl md:text-7xl text-foreground tracking-tight font-serif">
        {t("title")}
      </h1>
    </Link>
  );
};
