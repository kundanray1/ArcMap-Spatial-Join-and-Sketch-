// @ts-nocheck

import "@arcgis/core/assets/esri/themes/light/main.css";
import * as geometryEngine from "@arcgis/core/geometry/geometryEngine";
import ArcGISMap from "@arcgis/core/Map";
import Expand from "@arcgis/core/widgets/Expand";

import MapView from "@arcgis/core/views/MapView";
import "App.css";

import { geojsonlayer, geojsonlayerBridge } from "./LayersMobile";
import {
  basemapGallery,
  JoinedLayerTemplate,
  rendererProps,
} from "./MapConstantsMobile";
import { createLayer } from "./MapCutomFuntioncsMobile";
import { query } from "./QueriesMobile";

export const webmap = new ArcGISMap({
  basemap: "streets-navigation-vector",
});
const app = {
  map: webmap,
  center: [-111.95292894799996, 40.75033736100005],
  scale: 25000,
};
export const view = new MapView(app);

// let navigationBase = Basemap.fromId("streets-navigation-vector");

// let navigationBase = new Basemap({
//   baseLayers: [Basemap.fromId("streets-navigation-vector")],
//   title: "Flood",
//   id: "floodBaseMap",
// });

export async function initialize(container: any) {
  view.ui.move("zoom", "bottom-right");
  view.ui.remove("attribution");

  app.map.add(geojsonlayerBridge);
  app.map.add(geojsonlayer);

  view.when(async () => {
    const geoJsonResults = await geojsonlayer.queryFeatures(query);
    const geoJsonBridgeResult = await geojsonlayerBridge.queryFeatures(query);

    const features = [];
    let temp = [...geoJsonBridgeResult.features];
    let tmp2 = [];

    for (let feat of geoJsonResults.features) {
      const graphic = feat.clone();
      graphic.attributes.count = 0;
      graphic.attributes.status = "Not Specified";
      tmp2 = [...temp];
      for (let i = 0; i < tmp2.length; i++) {
        const x = temp[i];
        if (
          x &&
          graphic.geometry &&
          x.geometry &&
          geometryEngine.contains(graphic.geometry, x.geometry)
        ) {
          console.log("splicing");
          graphic.attributes.status = x.attributes.status;
          graphic.attributes.count++;
          temp.splice(i, 1);
        }
      }
      features.push(graphic);
    }

    app.map.removeMany([geojsonlayer]);
    setTimeout(() => {}, 2000);
    const joinLayer = await createLayer(geojsonlayer, features, [
      {
        name: "count",
        alist: "Count",
        type: "integer",
      },
      {
        name: "status",
        alist: "Status",
        type: "string",
      },
    ]);
    joinLayer.renderer = rendererProps;
    joinLayer.opacity = 0.5;
    joinLayer.maxScale = 145500;
    // joinLayer.minScale = 4622324;
    joinLayer.popupTemplate = JoinedLayerTemplate;
    var basemapGalleryExpand = new Expand({
      view: view,
      content: basemapGallery(view).domNode,
      // expandIconClass: "esri-icon-basemap",
    });

    app.map.add(joinLayer);
    app.map.reorder(joinLayer, 0);
    view.ui.add(basemapGalleryExpand, {
      position: "bottom-left",
    });
    view.popup.when("trigger-action", (event) => {
      console.log(event, "pop up event");
    });
    // view.ui.add(bmToggleWidget, "bottom-left");
  });

  view.container = container;
  // view.spatialReference = 4326;
  return { view, geojsonlayerBridge };
}
// export async function showLocation(item: any) {
//   const { attributes, location, extent } = item;

//   view.extent = extent;
// }
