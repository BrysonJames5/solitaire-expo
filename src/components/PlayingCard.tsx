import React from "react";
import { Container, Card, Text } from "native-base";

const PlayingCard = ({ rank, suit }) => {
  return (
    <Container>
      <Card>
        <Text>{rank}</Text>
        <Text>{suit}</Text>
      </Card>
    </Container>
  );
};

export default PlayingCard;
