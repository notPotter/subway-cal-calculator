import { Food, Menu } from "./../types/types";
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
    img: "",
  } as Menu,
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
  } as Food,
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
  } as Food,
});

export const sauceState = atom({
  key: "sauceState",
  default: [] as Food[],
});
