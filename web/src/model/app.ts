export interface PlantData {
  id: string;
  friendlyName: string;
  name: string;
  species?: string;
  description?: string;
  status: "alive" | "dead" | "dying" | "recovering" | "unknown";
  imgSrc?: string;
}
