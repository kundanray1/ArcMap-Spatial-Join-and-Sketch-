// @ts-nocheck
import * as geometryEngine from "@arcgis/core/geometry/geometryEngine";
import * as webMercatorUtils from "@arcgis/core/geometry/support/webMercatorUtils";
import Graphic from "@arcgis/core/Graphic";
import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import SimpleFillSymbol from "@arcgis/core/symbols/SimpleFillSymbol";
import MapView from "@arcgis/core/views/MapView";
import Feature from "@arcgis/core/widgets/Feature";

import SketchViewModel from "@arcgis/core/widgets/Sketch/SketchViewModel";

import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  Spinner,
  Text,
  useToast,
} from "@chakra-ui/react";
import { memo, useEffect, useRef, useState } from "react";
import { HiOutlineCheckCircle } from "react-icons/hi";
import { ImCross } from "react-icons/im";

import { IoChevronDown } from "react-icons/io5";
import { OnDraw, polygonSymbol } from "./MapFunctions";
import { initialize } from "./MapView";

var sketch: SketchViewModel;
var geoJsonLayer: GeoJSONLayer;
var sketchlayer: GraphicsLayer;
const TessalationMap = () => {
  const toast = useToast();
  const toastIdRef = useRef();

  const mapRef = useRef<Map>(null);
  const [sketchGraphics, setSketchGraphics] = useState<Graphic>([]);
  const [view, setView] = useState<MapView>();
  const [featureSelected, setFeatureSelected] = useState<Feature>([]);
  const [save, setSave] = useState(false);
  const [draw, setDraw] = useState(false);
  const [isListShown, setIsListShown] = useState(false);
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

  function showToast() {
    toastIdRef.current = toast({
      // title: `${featureSelected.length} bridge assessment request sent`,
      position: "top",
      status: "success",
      duration: 4000,
      isClosable: true,
      render: () => (
        <CustomToast
          featureSelected={featureSelected}
          toast={toast}
          toastid={toastIdRef}
        />
      ),
    });
    // return "show toast returs some values";
  }

  function mergeShapes() {
    var updatedGeometry = [];
    console.log(sketchGraphics, "sketchGraphics stored ");
    sketchGraphics.map(function (gra) {
      if (gra.geometry.spatialReference.wkid === 4326) {
        updatedGeometry.push(
          webMercatorUtils.geographicToWebMercator(gra.geometry.clone())
        );
      } else {
        updatedGeometry.push(gra.geometry.clone());
      }
    });
    var joinedPolygon = geometryEngine.union(updatedGeometry);
    console.log(joinedPolygon, "joined polygon ");
    view?.graphics.removeAll();
    let resultgraphic = new Graphic({
      geometry: joinedPolygon,
      symbol: polygonSymbol,
    });
    console.log(resultgraphic, "result graphics");
    view?.graphics.add(resultgraphic);

    view?.map.reorder(geoJsonLayer, 1);
    view?.map.reorder(resultgraphic.layer, 0);
  }

  return (
    <Box display={"flex"} height="100%" width={"100%"}>
      <Box ref={mapRef} className="mapDiv" />
      {save && (
        <Box className="edit-box" position={"absolute"}>
          <Button
            backgroundColor={"black"}
            className="edit-draw-button"
            position={"absolute"}
            textColor={"white"}
            onClick={() => controlDraw({ cancel: true, add: false })}
          >
            Edit Draw
            <Divider orientation="vertical" borderColor={"white"} mx={"13px"} />
            <ImCross color="white" size={12} />
          </Button>
          <Box
            className="edit-list-container"
            backgroundColor={"white"}
            textAlign="center"
          >
            <Text fontSize={"lg"} fontWeight="bold" mt={"12px"}>
              {featureSelected.length > 0 ? featureSelected.length : `No`}{" "}
              Bridges Selected
            </Text>
            {isListShown && (
              <List
                textAlign={featureSelected.length > 0 ? "left" : "center"}
                px="13px"
                spacing={"5px"}
                overflow="scroll"
                maxHeight={"207px"}
                mt={"12px"}
              >
                {featureSelected.length > 0 ? (
                  featureSelected.map((p, n) => {
                    return (
                      <ListItem
                        display={"flex"}
                        justifyContent="space-between"
                        alignItems={"center"}
                      >
                        <Box flex={0.8}>
                          <Text>{p.attributes.bridge_nam}</Text>
                        </Box>
                        <Box flex={0.1}>
                          <ImCross color="#C7C7C7" size={12} />
                        </Box>
                      </ListItem>
                    );
                  })
                ) : (
                  <Spinner />
                )}
              </List>
            )}
            {isListShown ? (
              <Button
                color={"#38606C"}
                fontSize="lg"
                mt={"8px"}
                backgroundColor="transparent"
                fontWeight={"normal"}
                _hover={{ backgroundColor: "transparent" }}
                _focus={{ backgroundColor: "transparent" }}
                onClick={() => setIsListShown(false)}
              >
                Hide list
              </Button>
            ) : (
              <Button
                color={"#38606C"}
                fontSize="lg"
                // mt={"8px"}
                onClick={() => setIsListShown(true)}
                backgroundColor="transparent"
                fontWeight={"normal"}
                _focus={{ backgroundColor: "transparent" }}
              >
                Show list
              </Button>
            )}

            <Divider borderBottomWidth={"2px"} />
            <Button
              className="edit-list-event-button"
              my={"12px"}
              alignItem="center"
              justifyContent={"space-evenly"}
              onClick={() =>
                featureSelected.length > 0
                  ? showToast()
                  : toast({
                      title: `No bridge selected for assesment`,
                      position: "top",
                      status: "error",
                      duration: 9000,
                      isClosable: true,
                    })
              }
            >
              Select Event Type
              <IoChevronDown color="white" />
            </Button>
          </Box>
        </Box>
      )}
      {draw === false && save === false ? (
        <Button
          backgroundColor={"#FFFFFF"}
          className="custom-button"
          position={"absolute"}
          onClick={() => startDraw()}
        >
          Draw
        </Button>
      ) : save == false ? (
        <Box
          backgroundColor="blackAlpha.600"
          className="apply-banner"
          px="20px"
        >
          <Text color={"white"} fontSize="14px">
            Draw a shape around the area you’d like to search
          </Text>
          <Box>
            <Button
              textColor={"white"}
              fontSize="14px"
              backgroundColor={"transparent"}
              _hover={{ bg: "transparent" }}
              onClick={() => controlDraw({ cancel: true, add: false })}
            >
              Cancel
            </Button>
            <Button
              textColor={"white"}
              fontSize="14px"
              backgroundColor={"transparent"}
              _hover={{ bg: "transparent" }}
              onClick={() => controlDraw({ save: true, add: false })}
              // onClick={() => mergeShapes()}
            >
              Apply
            </Button>
          </Box>
        </Box>
      ) : null}
    </Box>
  );
};

export default memo(TessalationMap);

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
