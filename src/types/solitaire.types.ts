// Define a type for playing card values
export type CardDisplayType =
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "J"
  | "Q"
  | "K"
  | "A";

export type SuitType = "SPADE" | "CLUB" | "HEART" | "DIAMOND";

export type ColorType = "RED" | "BLACK";

export const CardSuit = {
  SPADE: "SPADE",
  CLUB: "CLUB",
  HEART: "HEART",
  DIAMOND: "DIAMOND",
} satisfies Record<string, SuitType>;

export const CardColor = {
  BLACK: "BLACK",
  RED: "RED",
} satisfies Record<string, ColorType>;

export const CardValue = {
  TWO: "2",
  THREE: "3",
  FOUR: "4",
  FIVE: "5",
  SIX: "6",
  SEVEN: "7",
  EIGHT: "8",
  NINE: "9",
  TEN: "10",
  JACK: "J",
  QUEEN: "Q",
  KING: "K",
  ACE: "A",
} satisfies Record<string, CardDisplayType>;
