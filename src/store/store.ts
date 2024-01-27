import AsyncStorage from "@react-native-async-storage/async-storage";
import { StoreState } from "./StoreState";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export let initialState: StoreState = {
  state: "LOADING",
};
export const useStore = create<StoreState>()(
  persist(
    immer((set, get) => ({
      state: "LOADING",
    })),
    {
      name: "STORE_KEY",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
