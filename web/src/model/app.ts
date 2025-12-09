export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface PlantData {
  id: number;
  documentId: string;
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
  image?: {
    id: number;
    documentId: string;
    name: string;
    formats: ImageFormats;
  };
  origin: {
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

interface ImageFormats {
  thumbnail: ImageFormatDetails;
  small: ImageFormatDetails;
  medium: ImageFormatDetails;
  large: ImageFormatDetails;
  url: string;
  width: number;
  height: number;
  mime: string;
}

interface ImageFormatDetails {
  url: string;
  width: number;
  height: number;
  mime: string;
}
