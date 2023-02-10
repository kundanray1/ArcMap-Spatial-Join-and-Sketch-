import Color from "@arcgis/core/Color";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import SimpleFillSymbol from "@arcgis/core/symbols/SimpleFillSymbol";
import MapView from "@arcgis/core/views/MapView";
import SketchViewModel from "@arcgis/core/widgets/Sketch/SketchViewModel";
export const polygonSymbol = new SimpleFillSymbol({
  color: new Color([0, 0, 0, 0.3]), // overlay color (red, semi-transparent)
  style: "solid",

  outline: {
    color: "black",
    width: 1,
    style: "dash",
  },
});
export async function OnDraw(viewProp: any) {
  // const polygonSymbol = {
  //   type: "simple-fill", // autocasts as new SimpleFillSymbol()
  //   color: "#F2BC94",
  //   outline: {
  //     // autocasts as new SimpleLineSymbol()
  //     color: "#722620",
  //     width: 3,
  //   },
  // };
  return viewProp.when(() => {
    const sketchlayer = new GraphicsLayer();
    const sketch = new SketchViewModel({
      layer: sketchlayer,
      polygonSymbol: polygonSymbol,

      // visible: false,
      // activeTool: "polygon",
      view: viewProp,
      snappingOptions: {
        // autocasts to SnappingOptions()
        enabled: true, // global snapping is turned on
        // assigns a collection of FeatureSnappingLayerSource() and enables feature snapping on this layer
        // featureSources: [{ layer: graphicsLayer, enabled: true }],
      },
      defaultUpdateOptions: {
        tool: "reshape",
        toggleToolOnClick: true,
      },
      // availableCreateTools: ["polygon"],

      // defaultCreateOptions: { mode: "freehand" },
      // graphic will be selected as soon as it is created
      // creationMode: "update",
    });
    // console.log(sketchlayer, "ui components");

    return sketch;
  });
}

export async function focusFeature(view: MapView, item: any) {
  // const { attributes, location, extent } = item;
  console.log(item, "hi");
  // const graphic = new Graphic({
  //   attributes,
  //   geometry: {
  //     type: "point",
  //     ...location,
  //   },
  //   symbol,
  //   popupTemplate: {
  //     title: "{PlaceName}",
  //     content: "{Place_addr}",
  //   },
  // });
  // view.graphics.add(graphic);
  view.goTo(item);
}
