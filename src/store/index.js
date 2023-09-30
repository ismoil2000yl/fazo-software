import { initialAuth } from "./auth";
import authReducer from "./auth";
import { create } from "zustand";
import {createJSONStorage, persist} from 'zustand/middleware';


export const useStore = create(
  persist((set, get) => {
    return {
      auth: { ...initialAuth},
      ...authReducer(set, get),
    };
  }, {
    name: 'storage',
    storage: createJSONStorage(()=>localStorage)
  })
);