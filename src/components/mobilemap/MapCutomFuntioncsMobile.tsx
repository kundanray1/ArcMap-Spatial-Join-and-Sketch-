//@ts-nocheck

import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import Feature from "@arcgis/core/widgets/Feature";
import { view } from "./MapViewMobile";

export function customPopupFunction(feature: Feature) {
  // const callAndroid = () => {
  // window.bridgeEventClick.triggerEvent(feature.graphic.attributes.bridge_nam);
  // };

  const div = document.createElement("div");
  window.bridgeClickEvent.triggerEvent(
    JSON.stringify(feature.graphic.attributes)
  );

  console.log(JSON.stringify(feature.graphic.attributes), "image url");
  div.innerHTML = `<button style="flex: none; width="375px" >
    <div style="width: 30%;">
      <img src="${feature.graphic.attributes.image}" alt="Your Image" style="height: 100%;object-fit: cover;">
    </div>
    <div style="width: 70%; padding: 10px;">
      <div style="font-weight: 600;
      font-size: 16px;
      line-height: 22px;">${feature.graphic.attributes.bridge_nam}</div>
      <div style="font-size:13px">${feature.graphic.attributes.bridge_typ}</div>
      <div style="font-size:13px">${feature.graphic.attributes.Creator}</div>
      <div style="font-size:13px">${feature.graphic.attributes.status}</div>
    </div>
  </button>`;
  return div;
}

export async function createLayer(layer: any, source: any, extraFields: any) {
  console.log("entered into  CreateLayer");

  await layer.load();

  const fieldInfosMap = new Map();

  for (const field of [...layer.fields]) {
    console.log("loop inside inserting fieldinfos");
    fieldInfosMap.set(field.name, {
      fieldName: field.name,
      label: field.alias || field.name,
    });
  }
  const fieldInfos = [...new Set(fieldInfosMap.values())];
  // console.log(fieldInfos, "field infos");

  const featLayer = new FeatureLayer({
    title: "SPATIAL JOIN",
    objectIdField: layer.objectIdField,
    fields: [...new Set([...layer.fields, ...extraFields])],
    geometryType: layer.geometryType,
    source,
    popupTemplate: {
      title: "Copy Layer",
      contentL: [
        {
          type: "fields",
          fieldInfos: [...fieldInfos.values()],
        },
      ],
    },
  });
  return featLayer;

  // console.log(fieldInfos);
}

export async function showLocation(item: any) {
  // const { attributes, location, extent } = item;
  let opts = {
    duration: 500, // Duration of animation will be 5 seconds
  };
  // console.log(item);
  view.goTo(
    {
      center: [item.latitude, item.longitude],
      zoom: 12,
    },
    opts
  );

  // view.extent = extent;
}
