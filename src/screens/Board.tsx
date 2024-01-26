import { Box, Button, Container } from "native-base";
import React from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import { buildDeck } from "../deck-operations/buildDeck";
import PlayingCard from "../components/PlayingCard";
export const Board = () => {
  const deck = buildDeck();
  console.log(deck.length);
  return (
    <SafeAreaView>
      <Container>
        <PlayingCard suit={"SPADE"} rank={"ACE"} />
      </Container>
    </SafeAreaView>
  );
};
