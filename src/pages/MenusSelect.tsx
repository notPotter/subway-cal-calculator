import { BigInput } from "../components/BigInput";
import { Badge } from "../components/Badge";
import { MENUS } from "../constants/menus";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { menuState } from "../atoms/atoms";
import { Food } from "../types/types";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { ROUTE_PATH } from "../constants/route";
import { BadgeContainer, Container, Title } from "../styles/styles";
import { installApp } from "../install";
import { styled } from "styled-components";
import { motion } from "framer-motion";
import { colors } from "../constants/colors";

export function MenusSelect() {
  const [menuValue, setMenuValue] = useState("");
  const [menu, setMenu] = useRecoilState(menuState);
  const navigate = useNavigate();

  const handleChangeMenu = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMenuValue(e.target.value);
  };

  const handleClickMenu = (selectedMenu: Food) => {
    setMenu(selectedMenu);
    setMenuValue("");
    navigate(ROUTE_PATH.BREAD);
  };

  return (
    <>
      <Header />
      <Container>
        <Title>메뉴를 골라주세요</Title>
        <BigInput placeholder="메뉴 이름 입력" value={menuValue} onChange={handleChangeMenu} />
        <BadgeContainer>
          {Object.values(MENUS)
            .filter((menus) => menus.name.includes(menuValue))
            .map((menus) => (
              <Badge key={menus.name} selected={menus.name === menu.name} onClick={() => handleClickMenu(menus)}>
                {menus.name}
              </Badge>
            ))}
        </BadgeContainer>
        <S.PopUpButton {...shake} onClick={installApp}>
          앱 설치하기
        </S.PopUpButton>
      </Container>
    </>
  );
}

const shake = {
  animate: {
    x: [0, -10, 10, -10, 10, 0],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      loop: Infinity,
    },
  },
};

const S = {
  PopUpButton: styled(motion.button)`
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
  `,
};
