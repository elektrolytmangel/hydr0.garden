import type { FeatureCollection, Point } from "geojson";
import { Map, type StyleSpecification } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { useCallback, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import mapStyle from "../../config/mapstyle.json";
import type { PlantData } from "../../model/app";

interface MapComponentProps {
  features: FeatureCollection<Point, PlantData>;
}

export const MapComponent: React.FC<MapComponentProps> = (props) => {
  const navigate = useNavigate();
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<Map | null>(null);

  const init = useCallback(() => {
    const map = mapInstance.current;
    if (!map) return;

    map.addSource("plants", {
      type: "geojson",
      data: props.features,
    });

    map.addLayer({
      id: "plant-markers",
      type: "circle",
      source: "plants",
      paint: {
        "circle-radius": 6,
        "circle-color": "#4CAF50",
        "circle-stroke-width": 2,
        "circle-stroke-color": "#ffffff",
      },
    });

    map.on("click", "plant-markers", (e) => {
      const features = map.queryRenderedFeatures(e.point, {
        layers: ["plant-markers"],
      });
      if (!features.length) return;
      const feature = features[0];
      const plant = feature.properties as unknown as PlantData;

      navigate(`/plants/${plant.id}`);
    });

    map.on("mouseenter", "plant-markers", () => {
      map.getCanvas().style.cursor = "pointer";
    });
    map.on("mouseleave", "plant-markers", () => {
      map.getCanvas().style.cursor = "";
    });
  }, [props.features, navigate]);

  useEffect(() => {
    if (!mapContainer.current) return;

    const map = new Map({
      container: mapContainer.current,
      style: mapStyle as StyleSpecification,
      center: [5, 20],
      zoom: 2,
      minZoom: 1.5,
      maxZoom: 8,
    });

    map.on("load", () => init());
    mapInstance.current = map;

    return () => {
      map.remove();
    };
  }, [init]);

  return (
    <div ref={mapContainer} className="h-full aspect-square rounded-full" />
  );
};
