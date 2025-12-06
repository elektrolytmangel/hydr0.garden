import type { FeatureCollection, Point } from "geojson";
import { useTranslation } from "react-i18next";
import { useLoaderData } from "react-router";
import { MapComponent } from "../../components/map-component/MapComponent";
import { Title } from "../../components/title/Title";
import { SearchBar } from "../../components/ui/search-bar/SearchBar";
import type { PlantData } from "../../model/app";

export const PlantMap = () => {
  const { t } = useTranslation();
  const { plants } = useLoaderData() as {
    plants: FeatureCollection<Point, PlantData>;
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-4 h-screen">
      <Title />
      <SearchBar
        className="w-full md:w-1/2 mb-4 mt-10"
        placeholder={t("plants.search")}
      />
      <MapComponent features={plants} />
    </div>
  );
};
