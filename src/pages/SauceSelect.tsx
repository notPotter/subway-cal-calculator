import { css, styled } from "styled-components";
import { BigInput } from "../components/BigInput";
import colors from "../constants/colors";
import Badge from "../components/Badge";
import { SAUCES } from "../constants/menus";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { sauceState } from "../atoms/atoms";
import { food } from "../types/types";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { ROUTE_PATH } from "../constants/route";

export function SauceSelect() {
  const [sauceValue, setSauceValue] = useState<string>("");
  const [sauce, setSauce] = useRecoilState(sauceState);
  const navigate = useNavigate();

  const handleChangeMenu = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSauceValue(e.target.value);
  };

  const handleClickMenu = (selectedMenu: food) => {
    const sauceNames = Object.values(sauce).map((sauces) => sauces.name);
    const newSauce = [...sauce, selectedMenu];

    if (sauceNames.includes(selectedMenu.name)) {
      const newSauce = sauce.filter(
        (sauce) => sauce.name !== selectedMenu.name
      );
      setSauce(newSauce);
      setSauceValue("");

      return;
    }

    setSauce(newSauce);
    setSauceValue("");
  };

  return (
    <>
      <Header />
      <S.Container>
        <S.Title>소스를 골라주세요</S.Title>
        <BigInput
          placeholder="소스 이름 입력"
          value={sauceValue}
          onChange={handleChangeMenu}
        />
        <S.BadgeContainer>
          {Object.values(SAUCES)
            .filter((sauces) => sauces.name.includes(sauceValue))
            .map((sauces) => (
              <Badge
                key={sauces.name}
                selected={sauce
                  .map((sauce) => sauce.name)
                  .includes(sauces.name)}
                onClick={() => handleClickMenu(sauces)}
              >
                {sauces.name}
              </Badge>
            ))}
        </S.BadgeContainer>
        <S.Button
          disabled={sauce.length === 0}
          onClick={() => navigate(ROUTE_PATH.RESULT)}
        >
          확인
        </S.Button>
      </S.Container>
    </>
  );
}

const S = {
  Title: styled.h1`
    margin-bottom: 40px;
    font-size: 26px;
    line-height: 35px;
    word-break: keep-all;
    white-space: pre-line;
    font-weight: bold;
    color: ${colors.grey900};
  `,

  Container: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;
  `,

  BadgeContainer: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  `,

  Button: styled.button<{ disabled: boolean }>`
    box-sizing: border-box;
    position: fixed;
    bottom: 20px;
    width: calc(100% - 40px);
    height: 56px;
    border: none;
    border-radius: 16px;
    background-color: ${colors.yellow100};
    color: ${colors.white};
    font-size: 18px;
    font-weight: 600;

    ${({ disabled }) =>
      disabled &&
      css`
        background-color: ${colors.grey100};
        color: ${colors.grey300};
      `}
  `,
};
