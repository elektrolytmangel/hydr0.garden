import cn from "classnames";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useLoaderData } from "react-router";
import { Title } from "../../components/title/Title";
import { Button } from "../../components/ui/button/Button";
import { Paragraph } from "../../components/ui/paragraph/Paragraph";
import { type PlantData } from "../../model/app";
import { StatusTag } from "./status-tag/StatusTag";

export const PlantInfo: React.FC = () => {
  const { t } = useTranslation();
  const { plant } = useLoaderData() as { plant: PlantData | undefined };
  const imageUrl = plant?.imgSrc;
  const backgroundStyle = cn(
    "overflow-auto",
    "rounded-sm",
    "transition-all",
    "duration-300",
    "backdrop-blur-sm",
    "shadow-sm",
    "shadow-black/10 ",
    "bg-white/10",
    "mt-10"
  );

  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-4 h-screen max-w-3xl mx-auto ">
      <Title />
      <div className={backgroundStyle}>
        {imageUrl && (
          <div className="relative w-full h-50 object-cover bg-[#0a0e0d] overflow-hidden rounded-t-sm">
            <img
              src={imageUrl}
              alt={plant?.friendlyName}
              className="w-full h-full object-cover opacity-90"
            />
          </div>
        )}

        <div className="p-8 space-y-6 ">
          <div className="border-b border-foreground/50 pb-4 flex flex-col md:flex-row justify-between items-start gap-6">
            <div>
              <h1 className="text-3xl font-light text-foreground mb-2">
                {plant?.friendlyName}
              </h1>
              <Paragraph className="font-light">
                {plant?.latinName} / {plant?.species}
              </Paragraph>
            </div>
            <div className="flex md:flex-col md:items-end md:justify-between gap-2 my-auto w-full md:w-auto">
              <StatusTag status={plant?.status || "unknown"} />
              <Paragraph className="text-base! font-light text-wrap">
                {plant?.location?.country} / {plant?.location?.additionalInfo}{" "}
              </Paragraph>
            </div>
          </div>

          {plant?.description && (
            <div className="space-y-2">
              <h3 className="text-sm uppercase tracking-wider text-foreground">
                {t("plantInfo.description")}
              </h3>
              <Paragraph className="text-base! font-light">
                {plant?.description}
              </Paragraph>
            </div>
          )}

          {plant?.careInstructions && (
            <div className="space-y-2">
              <h3 className="text-sm uppercase tracking-wider text-foreground">
                {t("plantInfo.careInstructions")}
              </h3>
              <Paragraph className="text-base! font-light">
                {plant?.careInstructions}
              </Paragraph>
            </div>
          )}

          <div className="pt-4 border-t border-foreground/50">
            <Paragraph className="text-sm! text-foreground/60 font-mono">
              ID: {plant?.id}
            </Paragraph>
          </div>
        </div>
      </div>
      <Link to="/plants" className="w-full">
        <Button className="mt-4">{t("close")}</Button>
      </Link>
    </div>
  );
};

export default PlantInfo;
