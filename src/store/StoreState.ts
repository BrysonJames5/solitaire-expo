export type StoreState = {
  state: "LOADING" | "READY";
};

export type BoardState = {};

export type TableauState = {};

export type PillarState = {};

export type StockPileState = {};

export type FoundationState = {};

export type BoardSlice = {
  stockPile: StockPileState;
  setStockPile: (stockPile: StockPileState) => void;
};

export type StoreGetter = () => StoreState;

export type StoreSetter = (func: (state: StoreState) => void) => void;
export type StoreSlices = {
  boardSlice: BoardSlice;
};

export type SliceCreator<T> = (set: StoreSetter, get: StoreSetter) => T;
