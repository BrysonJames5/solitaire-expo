import { Badge, Box, Divider, HStack, Spacer, Text, VStack } from "native-base";

export const BarDetailTable = () => {
  return (
    <VStack>
      <HStack alignItems="center" space={4} justifyContent="space-between">
        <HStack alignItems="center">
          <Text
            color="coolGray.600"
            _dark={{
              color: "warmGray.200",
            }}
            fontWeight="400"
            fontSize={"sm"}
          >
            BarLine status
          </Text>
        </HStack>
        <HStack alignItems="center">
          <Text
            color="coolGray.600"
            _dark={{
              color: "warmGray.200",
            }}
            fontWeight="400"
            fontSize={"sm"}
          >
            wait time
          </Text>
        </HStack>
        <HStack alignItems="center">
          <Text
            color="coolGray.600"
            _dark={{
              color: "warmGray.200",
            }}
            fontWeight="400"
            fontSize={"sm"}
          >
            updated at
          </Text>
        </HStack>
      </HStack>

      <HStack alignItems="center" space={4} justifyContent="space-between">
        <HStack alignItems="center">
          <Badge colorScheme={"error"}>BUSY</Badge>
        </HStack>
        <HStack alignItems="center">
          <Text
            color="coolGray.600"
            _dark={{
              color: "warmGray.200",
            }}
            fontWeight="400"
            fontSize={"sm"}
          >
            ~45 minutes
          </Text>
        </HStack>
        <HStack alignItems="center">
          <Text
            color="coolGray.600"
            _dark={{
              color: "warmGray.200",
            }}
            fontWeight="400"
            fontSize={"sm"}
          >
            12 minutes ago
          </Text>
        </HStack>
      </HStack>
    </VStack>
  );
};
