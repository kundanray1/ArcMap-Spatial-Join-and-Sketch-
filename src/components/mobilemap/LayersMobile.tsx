// @ts-nocheck
import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";
import BridgesJson from "assets/polygons/bridge.json";
import Hexagon from "assets/polygons/Grid.json";
import { BridgeSymbol, customPopup, renderer } from "./MapConstantsMobile";

const blob = new Blob([JSON.stringify(Hexagon)], {
  type: "application/json",
});
const blobBridge = new Blob([JSON.stringify(BridgesJson)], {
  type: "application/json",
});
export const url = URL.createObjectURL(blob);
export const urlbridge = URL.createObjectURL(blobBridge);

export const geojsonlayer = new GeoJSONLayer({
  url,
  opacity: 0.5,
  renderer: renderer,
  visible: true,
  popupEnabled: true,
  maxScale: 8,
});
export const geojsonlayerBridge = new GeoJSONLayer({
  url: urlbridge,
  editingEnabled: true,
  screenSizePerspectiveEnabled: true,

  opacity: 1,
  // maxScale: 1 / 2,
  renderer: BridgeSymbol,
  popupTemplate: customPopup,
});
