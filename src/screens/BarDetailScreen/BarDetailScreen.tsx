import {
  Container,
  View,
  Text,
  Flex,
  Box,
  AspectRatio,
  Center,
  Stack,
  Heading,
  HStack,
} from "native-base";
import React from "react";
import { Image } from "react-native";

import MapView from "react-native-maps";
import { StyleSheet } from "react-native";
import { Map } from "../../components/map/Map";
import { SafeAreaView } from "react-native-safe-area-context";
import { BarDetailTable } from "./BarDetailTable";

export const Example = () => {
  return (
    <SafeAreaView edges={["bottom"]}>
      <Box alignItems="center">
        <Box
          overflow="hidden"
          borderColor="coolGray.200"
          borderWidth="1"
          _dark={{
            borderColor: "coolGray.600",
            backgroundColor: "gray.700",
          }}
          _web={{
            shadow: 2,
            borderWidth: 0,
          }}
          _light={{
            backgroundColor: "gray.50",
          }}
        >
          <Box>
            <AspectRatio w="100%" ratio={16 / 10}>
              <Map />
            </AspectRatio>

            {/* <Center
              bg="blue.200"
              _dark={{
                bg: "violet.400",
              }}
              _text={{
                color: "warmGray.50",
                fontWeight: "700",
                fontSize: "xs",
              }}
              position="absolute"
              bottom="0"
              px="3"
            >
              PHOTOS
            </Center> */}
          </Box>
          <Stack p="4" space={3}>
            <Stack space={2}>
              <Heading size="md" ml="-1">
                Rocco's Sports & Recreation
              </Heading>
              <Text
                fontSize="xs"
                _light={{
                  color: "violet.400",
                }}
                _dark={{
                  color: "violet.400",
                }}
                fontWeight="500"
                ml="-0.5"
                mt="-1"
              >
                Closes at 2AM
              </Text>
            </Stack>

            <BarDetailTable />
          </Stack>
        </Box>
      </Box>
    </SafeAreaView>
  );
};

// sections

/**
 * -----------------------------------------
|               Header                  |
|   Location Name                      |
-----------------------------------------
|                Map                    |
| [Map Image Here]                     |
-----------------------------------------
|               Table                   |
-----------------------------------------
| Info 1 | Info 2 | Info 3 | Info 4 | Info 5 | Info 6 |
|---------------------------------------------------|
|   A   |   B   |   C   |   D   |   E   |   F   |
|   ... |   ... |   ... |   ... |   ... |   ... |
|---------------------------------------------------|
 */
