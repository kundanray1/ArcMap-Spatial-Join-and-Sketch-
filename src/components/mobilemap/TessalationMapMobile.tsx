// @ts-nocheck
import Graphic from "@arcgis/core/Graphic";
import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import SimpleFillSymbol from "@arcgis/core/symbols/SimpleFillSymbol";
import MapView from "@arcgis/core/views/MapView";
import Expand from "@arcgis/core/widgets/Expand";
import Feature from "@arcgis/core/widgets/Feature";

import SketchViewModel from "@arcgis/core/widgets/Sketch/SketchViewModel";

import { Box, Button, Text, useToast } from "@chakra-ui/react";
import { memo, useEffect, useRef, useState } from "react";
import { HiOutlineCheckCircle } from "react-icons/hi";
import { ImCross } from "react-icons/im";
import { IoLocationOutline } from "react-icons/io5";
import { showLocation } from "./MapCutomFuntioncsMobile";

import { OnDraw } from "./MapFunctionsMobile";
import { initialize } from "./MapViewMobile";

var sketch: SketchViewModel;
var geoJsonLayer: GeoJSONLayer;
var sketchlayer: GraphicsLayer;
const TessalationMapMobile = () => {
  const toast = useToast();
  const toastIdRef = useRef();

  const mapRef = useRef<Map>(null);
  const [sketchGraphics, setSketchGraphics] = useState<Graphic>([]);
  const [view, setView] = useState<MapView>();
  const [featureSelected, setFeatureSelected] = useState<Feature>([]);
  const [save, setSave] = useState(false);
  const [draw, setDraw] = useState(false);
  const [isButtonShown, setIsButtonShown] = useState(true);
  // var sketchGraphics: Graphic[] = [];
  var a = 0;

  const loadMap = async () => {
    const { view, geojsonlayerBridge } = await initialize(mapRef.current);

    setView(view);
    geoJsonLayer = geojsonlayerBridge;
  };

  async function startDraw() {
    sketch = await OnDraw(view);

    //  sketchlayer = b;
    setDraw(true);
    sketch.create("polygon");

    // sketch.on("create", function (event: any) {
    //   if (event.state === "complete") {
    //     console.log(event, "event complete");
    //   }
    // });

    sketch.on("create", function (event: any) {
      if (event.state === "complete") {
        var geometry = event.graphic.geometry;
        var symbol = new SimpleFillSymbol();
        let tempGraphics = new Graphic({ geometry, symbol });
        sketchGraphics.push(tempGraphics);
        setSketchGraphics((previous) => [...previous, tempGraphics]);
        console.log(tempGraphics, "temporary graphics each time created");
        view.graphics.add(tempGraphics);
        queryFeaturelayer(geometry);
        controlDraw({ add: true });
      }
    });
  }
  function controlDraw({ cancel, save, add }) {
    console.log(sketch, save, add, "cancel, draw,add");

    if (cancel) {
      setSave(false);
      setDraw(false);
      sketch.destroy();
      // view.graphics.removeMany(sketchGraphics);
      view?.graphics.removeAll();
      setSketchGraphics([]);
      setFeatureSelected([]);
      return;
    } else if (save) {
      setDraw(false);

      sketch.destroy();
      mergeShapes();
      setSave(true);
    } else if (add) {
      startDraw();
    } else {
      setDraw(false);
    }
  }
  let temp = [];
  function queryFeaturelayer(geometry) {
    const parcelQuery = {
      spatialRelationship: "intersects", // Relationship operation to apply
      geometry: geometry, // The sketch feature geometry
      outFields: ["__OBJECTID", "bridge_nam"], // Attributes to return
      returnGeometry: true,
    };

    geoJsonLayer
      .queryFeatures(parcelQuery)
      .then((results) => {
        if (temp.length === 0) {
          temp = results.features;
        }
        const result = results.features.filter(
          ({ attributes: id1 }) =>
            !temp.some(
              ({ attributes: id2 }) => id1.__OBJECTID === id2.__OBJECTID
            )
        );

        temp = temp.concat(result);
        setFeatureSelected(temp);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    // console.log("render of tessalation after homeMap");
    // let b = loadMap();
    if (a === 0) {
      loadMap();

      ++a;
    }

    return () => {
      console.log("leaving MapView");
      if (mapRef.current !== null && a === 1) {
        mapRef.current = mapRef;
      }
    };
  }, []);
  // function navigateTo(item) {
  //   ShowLocation(item.geometry);
  // }

  window.addEventListener("load", () => {
    window.myFunction = (a) => {
      let p = JSON.parse(a);
      let pt = {
        latitude: p.coordinates[0][0],
        longitude: p.coordinates[0][1],
      };
      // focusFeature(p.geometry);
      console.log("function called", p.coordinates);
      // if (p.coordinates && p.coordinates[0] && p.coordinates[1]) {
      //   let dummy = {
      //     address: "George S Eccless 2002 Legacy Bridge",
      //     location: {
      //       x: p.coordinates[0][0],
      //       y: p.coordinates[0][1],
      //     },

      //     score: 20,

      //     extent: {
      //       xmin: p.coordinates[0][0] - 100 / 111319.49079327358,
      //       ymin: p.coordinates[0][1] - 100 / 111319.49079327358,
      //       xmax: p.coordinates[1][0] + 100 / 111319.49079327358,
      //       ymax: p.coordinates[1][1] + 100 / 111319.49079327358,

      //       spatialReference: {
      //         wkid: 4326,
      //       },
      //     },
      //   };
      //   // var line = p;

      //   showLocation(pt);
      //   // focusFeature(p);
      // } else return;
      showLocation(pt);
    };
    window.hideButtons = () => {
      setIsButtonShown(false);
      view?.ui.remove(["zoom", Expand]);
    };
  });

  // function showToast() {
  //   console.log("function called");
  //   toastIdRef.current = toast({
  //     // title: `${featureSelected.length} bridge assessment request sent`,
  //     position: "top",
  //     status: "success",
  //     duration: 4000,
  //     isClosable: true,
  //     render: () => (
  //       <CustomToast
  //         featureSelected={featureSelected}
  //         toast={toast}
  //         toastid={toastIdRef}
  //       />
  //     ),
  //   });
  //   // return "show toast returs some values";
  // }
  // function mergeShapes() {
  //   var updatedGeometry = [];
  //   console.log(sketchGraphics, "sketchGraphics stored ");
  //   sketchGraphics.map(function (gra) {
  //     if (gra.geometry.spatialReference.wkid === 4326) {
  //       updatedGeometry.push(
  //         webMercatorUtils.geographicToWebMercator(gra.geometry.clone())
  //       );
  //     } else {
  //       updatedGeometry.push(gra.geometry.clone());
  //     }
  //   });
  //   var joinedPolygon = geometryEngine.union(updatedGeometry);
  //   console.log(joinedPolygon, "joined polygon ");
  //   view?.graphics.removeAll();
  //   let resultgraphic = new Graphic({
  //     geometry: joinedPolygon,
  //     symbol: polygonSymbol,
  //   });
  //   console.log(resultgraphic, "result graphics");
  //   view?.graphics.add(resultgraphic);

  //   view?.map.reorder(geoJsonLayer, 1);
  //   view?.map.reorder(resultgraphic.layer, 0);
  // }

  return (
    <Box display={"flex"} height="100%" width={"100%"}>
      <Box ref={mapRef} className="mapDiv" />
      {isButtonShown && (
        <>
          <Button
            backgroundColor={"#FFFFFF"}
            className="mobile-filter-button"
            position={"absolute"}
          >
            Filter
          </Button>
          <Button
            backgroundColor={"#FFFFFF"}
            className="custom-button"
            position={"absolute"}
            p="0px"
          >
            <IoLocationOutline size={14} />
          </Button>
        </>
      )}
    </Box>
  );
};

export default memo(TessalationMapMobile);

const CustomToast = ({ featureSelected, toast, toastid }) => {
  function closeToast() {
    toast.close(toastid.current);
  }
  return (
    <Box
      className="toast-banner"
      display={"flex"}
      flexDirection="row"
      justifyContent={"space-between"}
    >
      <Box
        display={"flex"}
        flexDirection="row"
        flex={0.5}
        justifyContent={"space-evenly"}
      >
        <HiOutlineCheckCircle color="white" size={30} />
        <Text alignSelf={"center"}>
          {featureSelected.length} bridge assessment request sent
        </Text>
      </Box>
      <Button
        onClick={() => closeToast()}
        flex={0.1}
        backgroundColor="transparent"
        _hover={{ backgroundColor: "transparent" }}
        _focus={{ backgroundColor: "transparent" }}
      >
        <ImCross color="white" fontSize={"12px"} />
      </Button>
    </Box>
  );
};
