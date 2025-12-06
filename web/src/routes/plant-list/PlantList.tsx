import { useTranslation } from "react-i18next";
import { ListItem } from "./list-item/ListItem";

export const PlantList = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-4">
      <h1 className="text-5xl md:text-7xl text-foreground mb-6 tracking-tight font-serif">
        {t("home.title")}
      </h1>
      <div className="mt-12 z-10 gap-5 flex  flex-wrap">
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
    </div>
  );
};
