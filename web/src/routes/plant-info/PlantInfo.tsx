import React from "react";
import { type PlantData } from "../../model/app";

interface PlantInfoProps {
  plant: PlantData | undefined;
  imageUrl?: string;
  originMapPlaceholder?: string;
}

const statusColors = {
  alive: "text-[#4a7c59]",
  dead: "text-[#8b4a4a]",
  dying: "text-[#c9a961]",
  recovering: "text-[#6b9d7a]",
  unknown: "text-[#7a7a7a]",
};

const statusLabels = {
  alive: "Alive",
  dead: "Dead",
  dying: "Dying",
  recovering: "Recovering",
  unknown: "Unknown",
};

export const PlantInfo: React.FC<PlantInfoProps> = ({
  plant,
  imageUrl,
  originMapPlaceholder = "Map of origin location",
}) => {
  return (
    <div className="max-w-4xl mx-auto bg-[#1a1f1e] rounded-lg overflow-hidden border border-[#2a3f2e]/30 shadow-lg">
      {/* Image Section */}
      {imageUrl && (
        <div className="relative w-full h-80 bg-[#0a0e0d] overflow-hidden">
          <img
            src={imageUrl}
            alt={plant?.friendlyName}
            className="w-full h-full object-cover opacity-90"
          />
        </div>
      )}

      {/* Content Section */}
      <div className="p-8 space-y-6">
        {/* Header */}
        <div className="border-b border-[#2a3f2e]/30 pb-4">
          <h1 className="text-3xl font-light text-[#e8f0ee] mb-2">
            {plant?.friendlyName}
          </h1>
          <p className="text-lg italic text-[#c9d8d3]/70">{plant?.name}</p>
          {plant?.species && (
            <p className="text-sm text-[#c9d8d3]/50 mt-1">{plant.species}</p>
          )}
        </div>

        {/* Status */}
        <div className="flex items-center space-x-3">
          <span className="text-sm text-[#c9d8d3]/70">Status:</span>
          <span
            className={`text-sm font-medium ${
              plant?.status && statusColors[plant.status]
            } flex items-center`}
          >
            <span
              className={`inline-block w-2 h-2 rounded-full mr-2 ${
                plant?.status === "alive"
                  ? "bg-[#4a7c59]"
                  : plant?.status === "dead"
                  ? "bg-[#8b4a4a]"
                  : plant?.status === "dying"
                  ? "bg-[#c9a961]"
                  : plant?.status === "recovering"
                  ? "bg-[#6b9d7a]"
                  : "bg-[#7a7a7a]"
              }`}
            />
            {plant?.status && statusLabels[plant.status]}
          </span>
        </div>

        {/* Description */}
        {plant?.description && (
          <div className="space-y-2">
            <h3 className="text-sm uppercase tracking-wider text-[#4a7c59]">
              Description
            </h3>
            <p className="text-[#c9d8d3]/80 leading-relaxed">
              {plant?.description}
            </p>
          </div>
        )}

        {/* Origin Map Placeholder */}
        <div className="space-y-2">
          <h3 className="text-sm uppercase tracking-wider text-[#4a7c59]">
            Origin
          </h3>
          <div className="w-full h-48 bg-[#0a0e0d] rounded-md border border-[#2a3f2e]/30 flex items-center justify-center">
            <span className="text-[#c9d8d3]/40 text-sm italic">
              {originMapPlaceholder}
            </span>
          </div>
        </div>

        {/* Plant ID */}
        <div className="pt-4 border-t border-[#2a3f2e]/30">
          <span className="text-xs text-[#c9d8d3]/40 font-mono">
            ID: {plant?.id}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PlantInfo;
