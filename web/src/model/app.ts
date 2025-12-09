export interface PlantData {
  id: string;
  nickName: string;
  name: string;
  latinName?: string;
  family?: string;
  description?: string;
  careInstructions?: string;
  healthStatus: "alive" | "dead" | "dying" | "recovering" | "unknown";
  growthStage?:
    | "sprout"
    | "seedling"
    | "vegetative"
    | "budding"
    | "flowering"
    | "ripening";
  growMedia?: "soil" | "coco" | "perlite" | "coco_perlite" | "leca" | "none";
  image?: string; // Todo: this is a lsit of urls
  origin?: {
    country: string;
    additionalInfo?: string;
    latitude: number;
    longitude: number;
  };
  currentLocation?: {
    country: string;
    additionalInfo?: string;
    latitude: number;
    longitude: number;
  };
  isCurrentLocationIndoor?: boolean;
}
