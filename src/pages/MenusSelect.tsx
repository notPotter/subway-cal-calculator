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
      </Container>
    </>
  );
}
