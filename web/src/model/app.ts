export interface PlantData {
  id: string;
  friendlyName: string;
  latinName?: string;
  species?: string;
  description?: string;
  careInstructions?: string;
  status: "alive" | "dead" | "dying" | "recovering" | "unknown";
  imgSrc?: string;
  location: {
    country: string;
    additionalInfo?: string;
    latitude: number;
    longitude: number;
  };
}
