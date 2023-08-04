import { food } from "./../types/types";
import { atom } from "recoil";

export const menuState = atom({
  key: "menuState",
  default: {
    name: "",
    kcal: 0,
    protein: 0,
    saturatedFat: 0,
    sugars: 0,
    sodium: 0,
  } as food,
});

export const breadState = atom({
  key: "breadState",
  default: {
    name: "",
    kcal: 0,
    protein: 0,
    saturatedFat: 0,
    sugars: 0,
    sodium: 0,
  } as food,
});

export const cheeseState = atom({
  key: "cheeseState",
  default: {
    name: "",
    kcal: 0,
    protein: 0,
    saturatedFat: 0,
    sugars: 0,
    sodium: 0,
  } as food,
});

export const sauceState = atom({
  key: "sauceState",
  default: [] as food[],
});
