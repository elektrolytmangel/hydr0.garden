import type { Feature, FeatureCollection, Point } from "geojson";
import type { PlantData } from "../model/app";

/**
 * Converts an array of PlantData into a valid GeoJSON FeatureCollection
 * @param plants - Array of plant data objects
 * @returns GeoJSON FeatureCollection with plant locations and properties
 */
export function convertPlantsToGeoJSON(
  plants: PlantData[]
): FeatureCollection<Point, PlantData> {
  const features: Feature<Point, PlantData>[] = plants.map((plant) => ({
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [plant.location.longitude, plant.location.latitude],
    },
    properties: plant,
  }));

  return {
    type: "FeatureCollection",
    features,
  };
}
