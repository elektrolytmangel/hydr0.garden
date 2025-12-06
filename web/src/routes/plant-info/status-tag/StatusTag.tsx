import { useTranslation } from "react-i18next";
import type { PlantData } from "../../../model/app";

export const StatusTag: React.FC<{ status: PlantData["status"] }> = ({
  status,
}) => {
  const { t } = useTranslation();
  const statusColors: Record<PlantData["status"], string> = {
    alive: "bg-green-700",
    dead: "bg-black",
    dying: "bg-red-700",
    recovering: "bg-yellow-700",
    unknown: "bg-gray-500",
  };
  return (
    <span
      className={`text-sm ${statusColors[status]} flex items-center text-foreground rounded-sm px-4 py-1 font-medium`}
    >
      {t("plantStatus." + status)}
    </span>
  );
};
