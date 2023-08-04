import { styled } from "styled-components";
import { BigInput } from "../components/BigInput";
import colors from "../constants/colors";
import Badge from "../components/Badge";
import { CHEESES } from "../constants/menus";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { cheeseState } from "../atoms/atoms";
import { food } from "../types/types";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";

export function CheeseSelect() {
  const [cheeseValue, setMenuValue] = useState<string>("");
  const [cheese, setMenu] = useRecoilState(cheeseState);
  const navigate = useNavigate();

  const handleChangeMenu = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMenuValue(e.target.value);
  };

  const handleClickMenu = (selectedMenu: food) => {
    setMenu(selectedMenu);
    setMenuValue("");
    navigate("/sauce");
  };

  return (
    <>
      <Header />
      <S.Container>
        <S.Title>치즈를 골라주세요</S.Title>
        <BigInput
          placeholder="메뉴 이름 입력"
          value={cheeseValue}
          onChange={handleChangeMenu}
        />
        <S.BadgeContainer>
          {Object.values(CHEESES)
            .filter((cheeses) => cheeses.name.includes(cheeseValue))
            .map((cheeses) => (
              <Badge
                key={cheeses.name}
                selected={cheese.name === cheeses.name}
                onClick={() => handleClickMenu(cheeses)}
              >
                {cheeses.name}
              </Badge>
            ))}
        </S.BadgeContainer>
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
};
