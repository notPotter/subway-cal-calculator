import { useRecoilState } from "recoil";
import { sauceState } from "../atoms/atoms";
import { useNavigate } from "react-router-dom";
import { Food } from "../types/types";
import { useState } from "react";
import { ROUTE_PATH } from "../constants/route";

export function useSauceSelect() {
  const [sauceValue, setSauceValue] = useState("");
  const [sauce, setSauce] = useRecoilState(sauceState);
  const navigate = useNavigate();

  const handleChangeMenu = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSauceValue(e.target.value);
  };

  const handleClickMenu = (selectedMenu: Food) => {
    handleSelectedMenuNone(selectedMenu);
    handleUnSelectMenu(selectedMenu);
    handleSelectMenu(selectedMenu);
  };

  const handleSelectedMenuNone = (selectedMenu: Food) => {
    if (selectedMenu.name === "선택안함") {
      setSauce([selectedMenu]);
      setSauceValue("");
    }
  };

  const handleUnSelectMenu = (selectedMenu: Food) => {
    const sauceNames = Object.values(sauce).map((sauces) => sauces.name);
    const newSauce = sauce.filter((sauce) => sauce.name !== selectedMenu.name);

    if (sauceNames.includes(selectedMenu.name)) {
      setSauce(newSauce);
      setSauceValue("");
    }
  };

  const handleSelectMenu = (selectedMenu: Food) => {
    const newSauce = [...sauce, selectedMenu];
    setSauce(newSauce.filter((sauce) => sauce.name !== "선택안함"));
    setSauceValue("");
  };

  const handleClickButton = () => {
    navigate(ROUTE_PATH.RESULT);
  };

  return {
    sauce,
    sauceValue,
    handleChangeMenu,
    handleClickMenu,
    handleClickButton,
  };
}
