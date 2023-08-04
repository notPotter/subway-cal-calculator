import { styled } from "styled-components";
import { BigInput } from "../components/BigInput";
import colors from "../constants/colors";
import Badge from "../components/Badge";
import { MENUS } from "../constants/menus";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { menuState } from "../atoms/atoms";
import { food } from "../types/types";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { ROUTE_PATH } from "../constants/route";

export function MenusSelect() {
  const [menuValue, setMenuValue] = useState<string>("");
  const [menu, setMenu] = useRecoilState(menuState);
  const navigate = useNavigate();

  const handleChangeMenu = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMenuValue(e.target.value);
  };

  const handleClickMenu = (selectedMenu: food) => {
    setMenu(selectedMenu);
    setMenuValue("");
    navigate(ROUTE_PATH.BREAD);
  };

  return (
    <>
      <Header />
      <S.Container>
        <S.Title>메뉴를 골라주세요</S.Title>
        <BigInput
          placeholder="메뉴 이름 입력"
          value={menuValue}
          onChange={handleChangeMenu}
        />
        <S.BadgeContainer>
          {Object.values(MENUS)
            .filter((menus) => menus.name.includes(menuValue))
            .map((menus) => (
              <Badge
                key={menus.name}
                selected={menus.name === menu.name}
                onClick={() => handleClickMenu(menus)}
              >
                {menus.name}
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
