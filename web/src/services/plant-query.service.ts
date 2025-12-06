import type { FeatureCollection, Point } from "geojson";
import exampleData from "../data/example.json";
import type { PlantData } from "../model/app";
import { convertPlantsToGeoJSON } from "./geojson.service";

interface CacheEntry {
  data: FeatureCollection<Point, PlantData>;
  timestamp: number;
}

class PlantQueryService {
  private cache: CacheEntry | null = null;
  private readonly CACHE_DURATION_MS = 12 * 60 * 60 * 1000; // 12 hours

  /**
   * Checks if the cache is valid (exists and is less than 12 hours old)
   */
  private isCacheValid(): boolean {
    if (!this.cache) return false;
    const now = Date.now();
    return now - this.cache.timestamp < this.CACHE_DURATION_MS;
  }

  /**
   * Fetches and caches the plant data as GeoJSON
   */
  private fetchAndCache(): FeatureCollection<Point, PlantData> {
    const plants = exampleData as PlantData[];
    const geoJson = convertPlantsToGeoJSON(plants);

    this.cache = {
      data: geoJson,
      timestamp: Date.now(),
    };

    return geoJson;
  }

  /**
   * Gets all plants as a GeoJSON FeatureCollection
   * @returns GeoJSON FeatureCollection with all plants
   */
  getAll(): FeatureCollection<Point, PlantData> {
    if (this.isCacheValid()) {
      return this.cache!.data;
    }
    return this.fetchAndCache();
  }

  /**
   * Gets a single plant by ID
   * @param id - The plant ID to search for
   * @returns The plant data or undefined if not found
   */
  getById(id: string): PlantData | undefined {
    const geoJson = this.getAll();
    const feature = geoJson.features.find(
      (feature) => feature.properties.id === id
    );
    return feature?.properties;
  }
}

// Export a singleton instance
export const plantQueryService = new PlantQueryService();
