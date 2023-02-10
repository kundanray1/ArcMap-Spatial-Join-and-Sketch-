// @ts-nocheck

import Basemap from "@arcgis/core/Basemap";
import PictureMarkerSymbol from "@arcgis/core/symbols/PictureMarkerSymbol";
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery";

import {
  BridgeIconGreen,
  BridgeIconRed,
  BridgeIconYellow,
} from "assets/images";
import { customPopupFunction } from "./MapCutomFuntioncs";

export var fairSymbol = new PictureMarkerSymbol({
  url: BridgeIconYellow,
  width: 34,
  height: 24,
});
export var riskSymbol = new PictureMarkerSymbol({
  url: BridgeIconRed,
  width: 34,
  height: 24,
});
export var goodSymbol = new PictureMarkerSymbol({
  url: BridgeIconGreen,
  width: 34,
  height: 24,
});

export const BridgeSymbol = {
  type: "unique-value", // autocasts as new UniqueValueRenderer()
  field: "status",
  defaultSymbol: {
    type: "picture-marker",
    url: BridgeIconGreen,
    color: "transparent",

    outline: {
      color: "transparent",
      width: 1,
    },
  }, // autocasts as new SimpleFillSymbol()
  uniqueValueInfos: [
    {
      // All features with value of "North" will be blue
      value: "good",
      symbol: goodSymbol,
    },
    {
      // All features with value of "East" will be green
      value: "fair",
      symbol: fairSymbol,
    },
    {
      // All features with value of "South" will be red
      value: "risk",
      symbol: riskSymbol,
    },
  ],
};

export const customPopup = {
  // autocasts as new PopupTemplate()
  title: "Bridges in {bridge_nam}",
  outFields: ["*"],
  content: customPopupFunction,
  actions: [],
};

export const renderer = {
  type: "simple",
  symbol: {
    type: "simple-fill",
    color: "green",
    outline: {
      color: "white",
      width: 1,
    },
  },
};

export const rendererProps = {
  type: "unique-value", // autocasts as new UniqueValueRenderer()
  field: "status",
  defaultSymbol: {
    type: "simple-fill",
    color: "transparent",
    outline: {
      color: "transparent",
      width: 1,
    },
  }, // autocasts as new SimpleFillSymbol()
  uniqueValueInfos: [
    {
      // All features with value of "North" will be blue
      value: "good",
      symbol: {
        type: "simple-fill", // autocasts as new SimpleFillSymbol()
        color: "green",
        outline: {
          color: "white",
          width: 1,
        },
      },
    },
    {
      // All features with value of "East" will be green
      value: "fair",
      symbol: {
        type: "simple-fill", // autocasts as new SimpleFillSymbol()
        color: "yellow",
        outline: {
          color: "white",
          width: 1,
        },
      },
    },
    {
      // All features with value of "South" will be red
      value: "risk",
      symbol: {
        type: "simple-fill", // autocasts as new SimpleFillSymbol()
        color: "red",
        outline: {
          color: "white",
          width: 1,
        },
      },
    },
  ],
};

export const heatMapRenderer = {
  type: "heatmap",
  field: "count",

  colorStops: [
    { color: "#1f1f1f", ratio: 0 },
    { color: "#dcdcf7", ratio: 0.001 },
    { color: "#c6cdf9", ratio: 0.002 },
    { color: "#e2dff3", ratio: 0.003 },
    { color: "#c5f4f6", ratio: 0.004 },
    { color: "#ccffdc", ratio: 0.005 },
    { color: "#faffcc", ratio: 0.006 },
    { color: "#faffcc", ratio: 0.007 },
    { color: "#faffcc", ratio: 0.008 },
    { color: "#f3f6c6", ratio: 0.009 },
    { color: "#fbefca", ratio: 0.0095 },
    { color: "#f6d5c6", ratio: 0.011 },
    { color: "#facbcc", ratio: 0.09 },

    { color: "#facbcc", ratio: 0.01 },
  ],
  radius: 60,

  // maxDensity: 1,

  minDensity: 0,
};

export const JoinedLayerTemplate = {
  title: "{__OBJECTID}",
  content: [
    {
      type: "fields",
      fieldInfos: [
        {
          fieldName: `count`,
          label: "Number Of bridges",
          isEditable: false,
          tooltip: "",
          visible: true,
          format: null,
          stringFieldOption: "text-box",
        },
      ],
    },
  ],
};

const grey = Basemap.fromId("dark-gray-vector");

export const basemapGallery = (view) => {
  return new BasemapGallery({
    view: view,
    label: "Layers",
    source: [
      Basemap.fromId("topo-vector"),
      Basemap.fromId("hybrid"),
      grey,

      // navigationBase,
    ],
    container: document.createElement("div"), // autocasts to LocalBasemapsSource
  });
};
