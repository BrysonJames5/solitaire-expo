import { Center } from "native-base";
import { DimensionValue } from "react-native";
import MapView from "react-native-maps";

interface MapInterface {
  mapHeight?: DimensionValue;
  mapWidth?: DimensionValue;
}

export const Map = ({ mapHeight, mapWidth }: MapInterface) => {
  return (
    <Center>
      <MapView
        style={{
          height: mapHeight ? mapHeight : "100%",
          width: mapWidth ? mapWidth : "100%",
        }}
      />
    </Center>
  );
};
