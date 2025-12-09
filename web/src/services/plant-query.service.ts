import type { FeatureCollection, Point } from "geojson";
import { backendApi } from "../api/backend";
import type { PlantData, StrapiResponse } from "../model/app";
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
  private async fetchAndCache(): Promise<FeatureCollection<Point, PlantData>> {
    try {
      const response = await backendApi.get<StrapiResponse<PlantData[]>>(
        "/plants?populate=*"
      );
      const geoJson = convertPlantsToGeoJSON(response.data.data);

      this.cache = {
        data: geoJson,
        timestamp: Date.now(),
      };

      return geoJson;
    } catch (error) {
      console.error("Error fetching plant data:", error);
      throw error;
    }
  }

  /**
   * Gets all plants as a GeoJSON FeatureCollection
   * @returns GeoJSON FeatureCollection with all plants
   */
  async getAll(): Promise<FeatureCollection<Point, PlantData>> {
    if (this.isCacheValid()) {
      return this.cache!.data;
    }
    return await this.fetchAndCache();
  }

  /**
   * Gets a single plant by ID
   * @param id - The plant ID to search for
   * @returns The plant data or undefined if not found
   */
  async getById(id: string): Promise<PlantData | undefined> {
    try {
      const response = await backendApi.get<StrapiResponse<PlantData>>(
        `/plants/${id}?populate=*`
      );
      return response.data.data;
    } catch (error) {
      console.error(`Error fetching plant with ID ${id}:`, error);
      return undefined;
    }
  }
}

// Export a singleton instance
export const plantQueryService = new PlantQueryService();
